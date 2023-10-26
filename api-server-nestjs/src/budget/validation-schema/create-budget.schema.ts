import * as joi from 'joi';
export const createBudgetSchema = joi.object({
  budget_title: joi.string().required(),
  amount: joi.number().required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  month: joi.string().required(),
});
