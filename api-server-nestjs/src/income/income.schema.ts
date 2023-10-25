import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';

const month = moment().format('MMMM');

@Schema({ timestamps: true })
export class Income extends Document {
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

export const IncomeSchema = SchemaFactory.createForClass(Income);
