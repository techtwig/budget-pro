import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateWalletDto {
  @IsOptional()
  @IsString()
  wallet_title: string;

  @IsOptional()
  @IsNumber()
  type_id: number;

  @IsOptional()
  @IsNumber()
  balance: number;
}
