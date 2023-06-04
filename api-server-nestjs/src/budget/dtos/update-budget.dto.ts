import { IsOptional, IsString, IsNumber, IsDate } from "class-validator";

export class UpdateBudgetDto {
  @IsOptional()
  @IsString()
  budget_item?: string;

  @IsOptional()
  @IsNumber()
  budget_amount?: number;

  @IsOptional()
  @IsString()
  budget_month?: string;

  @IsOptional()
  @IsDate()
  budget_time?: Date;


}
