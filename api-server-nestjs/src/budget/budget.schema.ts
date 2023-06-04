import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import * as moment from "moment";


const month = moment().format("MMMM");

@Schema()
export class Budget extends Document {
  @Prop()
  budget_item: string;

  @Prop()
  budget_amount: number;


  @Prop({ type: String, default: month })
  budget_month: string;

  @Prop({ type: Date, default: Date.now() })
  budget_time: Date;

  @Prop({ type: Types.ObjectId, ref: "User" })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Category" })
  categoryId: Types.ObjectId;
}


export const BudgetSchema = SchemaFactory.createForClass(Budget);
