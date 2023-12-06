import { IsEmpty, IsNumber, IsString } from 'class-validator';
import {Prop} from "@nestjs/mongoose";

export class CreateWalletDto {
  wallet_title: string;

  type_id: number;

  balance: number;

  user_id: string;
}
