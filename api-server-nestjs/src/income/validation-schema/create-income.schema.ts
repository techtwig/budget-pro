import * as joi from 'joi';
export const createIncomeSchema = joi.object({
  title: joi.string().required(),
  balance: joi.number().required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  date: joi.string().required(),
});
