import Joi from "joi";
import { CreateUserSchema } from "../services/userService";


export const userSchema = Joi.object<CreateUserSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});