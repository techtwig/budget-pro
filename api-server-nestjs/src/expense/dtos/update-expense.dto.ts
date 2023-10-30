import {
  IsOptional,
  IsString,
  IsNumber,
  IsDate,
  IsArray,
  IsDateString,
} from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  balance?: number;

  @IsOptional()
  @IsString()
  wallet_id?: number;

  @IsOptional()
  @IsArray()
  category_ids: string[];

  @IsOptional()
  @IsDateString()
  date: string;
}
