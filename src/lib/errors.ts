import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
export class ApiError extends Error {
  public status: number;
  public error?: any;
  constructor({
    message,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    error = null,
  }) {
    super(message);
    this.status = status;
    this.error = error;
  }
}

export const gh = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;

  console.error(err);

  let response = {
    code: status,
    message: err.message || httpStatus[status],
  };

  Object.assign(response, { error: err.error });

  res.status(status).json(response);
};

export const nfh = (req: Request, res: Response, next: NextFunction) => {
  const notfountError = new ApiError({
    message: "Not found",
    status: httpStatus.NOT_FOUND,
  });
  return gh(notfountError, req, res, next);
};
