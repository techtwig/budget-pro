import {
  IsArray,
  IsDateString,
  IsEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  title: string;

  @IsNumber()
  balance: number;

  @IsString()
  wallet_id: string;

  @IsArray()
  category_ids: string[];

  @IsDateString()
  date: string;

  @IsEmpty()
  user_id: string;
}
