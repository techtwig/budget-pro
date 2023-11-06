import * as joi from 'joi';
export const createWalletValidationSchema = joi.object({
  wallet_title: joi.string().max(200).required(),

  type_id: joi.number().required(),

  balance: joi.number().min(100).max(2000000).required(),
});
