import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";

export class CreateBudgetDto {
  @IsString()
  budget_item: string;

  @IsNumber()
  budget_amount: number;

  @IsString()
  budget_month: string;

  @IsDateString()
  budget_time: Date;

  @IsEmpty()
  userId: any;

  @IsEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
