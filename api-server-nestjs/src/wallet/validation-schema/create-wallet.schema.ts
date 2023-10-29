import * as joi from 'joi';
export const createWalletSchema = joi.object({
  wallet_title: joi.string().required(),

  type_id: joi.number().required(),

  balance: joi.number().required(),
});
