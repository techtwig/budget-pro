import {
  IsOptional,
  IsString,
  IsNumber,
  IsDate,
  IsArray,
  IsDateString,
} from 'class-validator';

export class UpdateExpenseDto {
  title?: string;

  balance?: number;

  wallet_id?: number;

  category_ids: string[];

  date: string;
}
