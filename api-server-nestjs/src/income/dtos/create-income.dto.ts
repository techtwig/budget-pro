import {
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateIncomeDto {
  @IsString()
  income_source: string;

  @IsNumber()
  income_amount: number;

  // @IsString()
  // income_month: string;
  //
  // @IsDateString()
  // income_time: Date;

  @IsEmpty()
  userId: any;

  @IsEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
