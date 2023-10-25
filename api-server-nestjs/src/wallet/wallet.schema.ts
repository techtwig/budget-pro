import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Wallet extends Document {
  @Prop()
  wallet_title: string;

  @Prop()
  type_id: number;

  @Prop()
  balance: number;

  @Prop()
  user_id: Types.ObjectId;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
