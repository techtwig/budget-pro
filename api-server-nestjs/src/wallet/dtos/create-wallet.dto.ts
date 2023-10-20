import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  wallet_title: string;

  @IsNumber()
  type_id: number;

  @IsNumber()
  balance: number;
}
