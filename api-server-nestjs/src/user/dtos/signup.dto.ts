import { IsNotEmpty, IsPositive, IsString, Min } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @Min(0)
  current_balance: number = 0;
}
