import Joi from "joi";
import { BodySchema, ParamsSchema } from "./validation.middleware";
import { FROM } from "./consts";
import _ from "lodash";

export const getAuthenticated = Joi.object<ParamsSchema, true>({
  params: Joi.object({
    from: Joi.string().valid(Object.values(FROM)),
  }),
});

// export const createUserSchema = Joi.object<BodySchema, true>({
//   body: Joi.object({
//     name: Joi.string().min(3, "utf8").max(20, "utf8").required(),
//     email: Joi.string().email().required(),
//     pw: Joi.string()
//       .regex(
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&\.\,\-\_])[A-Za-z\d@$!%*#?&\.\,\-\_]{8,}$/
//       )
//       .required(),
//   }),
// });
