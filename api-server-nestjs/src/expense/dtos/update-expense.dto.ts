import { IsOptional, IsString, IsNumber, IsDate } from "class-validator";

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  expenseItem?: string;

  @IsOptional()
  @IsNumber()
  expenseAmount?: number;

  @IsOptional()
  @IsString()
  expenseMonth?: string;

  @IsOptional()
  @IsDate()
  expenseTime?: Date;


}
