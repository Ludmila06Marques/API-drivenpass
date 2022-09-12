import joi from "joi";

export const cardSchema = joi.object({
  number: joi.string().required(),
  cardName: joi.string().required(),
  securityCode: joi.string().max(3),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().required()
});