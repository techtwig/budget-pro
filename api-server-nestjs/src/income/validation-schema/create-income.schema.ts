import * as joi from 'joi';
export const createIncomeSchema = joi.object({
  title: joi.string().max(30).required(),
  balance: joi.number().min(100).max(2000000).required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  date: joi.string().required(),
});
