import * as joi from 'joi';
export const createBudgetSchema = joi.object({
  budget_title: joi.string().max(30).required(),
  amount: joi.number().min(100).max(2000000).required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  month: joi.date().required(),
});
