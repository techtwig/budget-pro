import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as moment from "moment";


const month = moment().format("MMMM");


@Schema({ timestamps: true })
export class Income extends Document {
  @Prop()
  income_source: string;
  @Prop()
  income_amount: number;

  @Prop({ type: String, default: month })
  income_month: string;

  @Prop({ type: Date, default: Date.now() })
  income_time: Date;

  @Prop({ type: Types.ObjectId, ref: "User" })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Category" })
  categoryId: Types.ObjectId;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
