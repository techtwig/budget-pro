import * as joi from 'joi';
console.log('schema');
export const createExpenseValidationSchema = joi.object({
  title: joi.string().max(200).required(),
  balance: joi.number().min(100).max(2000000).required(),
  wallet_id: joi.string().required(),
  category_ids: joi.array().items(joi.string()),
  date: joi.string().required(),
});
