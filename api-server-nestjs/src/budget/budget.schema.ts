import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Budget extends Document {
  @Prop()
  budget_title: string;

  @Prop()
  amount: number;

  @Prop({ type: Types.ObjectId, ref: 'Wallet' })
  wallet_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category_ids: Types.ObjectId;

  @Prop()
  month: string;

  @Prop()
  user_id: string;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
