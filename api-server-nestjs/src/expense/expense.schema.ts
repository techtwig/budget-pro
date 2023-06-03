import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

import * as moment from "moment";


const month = moment().format("MMMM");

@Schema({ timestamps: true })
export class Expense extends Document {
  @Prop()
  expenseItem: string;

  @Prop()
  expenseAmount: number;


  @Prop({ type: String, default: month })
  expenseMonth: string;

  @Prop({ type: Date, default: Date.now() })
  expenseTime: Date;

  @Prop({ type: Types.ObjectId, ref: "User" })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Category" })
  categoryId: Types.ObjectId;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
