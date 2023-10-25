import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBudgetDto {
  @IsOptional()
  @IsString()
  budget_title?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  wallet_id?: string;

  @IsOptional()
  @IsString()
  category_id?: string;
}
