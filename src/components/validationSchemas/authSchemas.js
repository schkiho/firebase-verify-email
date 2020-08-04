import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(255)
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(50).required(),
});

export const registerSchema = Joi.object({
  Firstname: Joi.string().min(5).max(50).lowercase().required(),
  Lastname: Joi.string().min(5).max(50).lowercase().required(),
  email: Joi.string()
    .min(5)
    .max(255)
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(50).required(),
  password2: Joi.string().valid(Joi.ref("password")).required(),
});
