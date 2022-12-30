import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";
import _ from "lodash";
import { ApiError } from "./errors";

export interface QuerySchema {
  query: Joi.ObjectSchema;
}

export interface ParamsSchema {
  params: Joi.ObjectSchema;
}

export interface BodySchema {
  body: Joi.ObjectSchema;
}

export default (
  schema: Joi.ObjectSchema<Partial<QuerySchema & ParamsSchema & BodySchema>>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const test = Object.assign(
        {},
        !_.isEmpty(req.body) ? { body: req.body } : null,
        !_.isEmpty(req.query) ? { query: req.query } : null,
        !_.isEmpty(req.params) ? { params: req.params } : null
      );
      console.log(`validating...`, test);
      await schema.validateAsync(test);
      next();
    } catch (error) {
      next(
        new ApiError({
          status: httpStatus.BAD_REQUEST,
          message: httpStatus[httpStatus.BAD_REQUEST],
          error: error.details,
        })
      );
    }
  };
};
