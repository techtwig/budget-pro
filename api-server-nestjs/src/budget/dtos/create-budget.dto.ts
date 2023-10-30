import {
  ArrayMinSize,
  IsDate,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinDate,
} from 'class-validator';
import { Transform } from 'class-transformer';

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

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  @MinDate(new Date())
  month: Date;

  @IsEmpty()
  user_id: string;
}
