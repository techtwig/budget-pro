import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema({ timestamps: true })
export class Cashbook extends Document {
  @Prop({ type: Types.ObjectId, ref: "User" })
  userId: string;

  @Prop({ type: Types.ObjectId, ref: "Income" })
  incomeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Expense" })
  expenseId: Types.ObjectId;

  @Prop({ type: Number, min: 0, default: 0 })
  currentBalance: number;
}


export const CashbookSchema = SchemaFactory.createForClass(Cashbook);
