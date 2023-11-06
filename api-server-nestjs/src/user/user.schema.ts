import { Document, HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {

  @Prop()
  email: string;

  @Prop({ select: false })
  password: string;

  @Prop({ type: Number, default: 0 })
  current_balance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
