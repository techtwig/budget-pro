import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString
} from "class-validator";

export class CreateExpenseDto {
  @IsString()
  expenseItem: string;

  @IsNumber()
  expenseAmount: number;

  @IsString()
  expenseMonth: string;

  @IsDateString()
  expenseTime: Date;

  @IsEmpty()
  userId: any;

  @IsEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
