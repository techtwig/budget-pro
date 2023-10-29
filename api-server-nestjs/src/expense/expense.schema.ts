import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Expense extends Document {
  @Prop()
  title: string;

  @Prop()
  balance: number;

  @Prop({ type: Types.ObjectId, ref: 'Wallet' })
  wallet_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category_ids: Types.ObjectId;

  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user_id: Types.ObjectId;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
