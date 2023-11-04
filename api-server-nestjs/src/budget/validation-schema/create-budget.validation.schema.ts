import * as joi from 'joi';
export const createBudgetValidationSchema = joi.object({
  budget_title: joi.string().max(200).required(),
  amount: joi.number().min(100).max(2000000).required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  month: joi.date().required(),
});
