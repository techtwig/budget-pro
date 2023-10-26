import { ArrayMinSize, IsEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  budget_title: string;

  @IsNumber()
  amount: number;

  @IsString()
  wallet_id: string;

  @IsString({ each: true })
  @ArrayMinSize(1)
  category_ids: string[];

  @IsString()
  month: string;

  @IsEmpty()
  user_id: string;
}
