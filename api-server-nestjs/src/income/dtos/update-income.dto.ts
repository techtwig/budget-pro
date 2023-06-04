import { IsOptional, IsString, IsNumber, IsDate } from "class-validator";

export class UpdateIncomeDto {
  @IsOptional()
  @IsString()
  income_source?: string;

  @IsOptional()
  @IsNumber()
  income_amount?: number;

  @IsOptional()
  @IsString()
  income_month?: string;

  @IsOptional()
  @IsDate()
  income_time?: Date;


}
