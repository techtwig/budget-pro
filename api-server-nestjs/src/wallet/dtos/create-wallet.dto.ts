import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWalletDto {
  wallet_title: string;

  type_id: number;

  balance: number;
}
