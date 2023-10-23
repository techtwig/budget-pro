import { IsArray, IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  budget_title: string;

  @IsNumber()
  amount: number;

  @IsString()
  wallet_id;

  @IsArray()
  category_id: string;

  @IsEmpty()
  user_id: string;
}
