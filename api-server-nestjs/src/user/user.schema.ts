import { Document, HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  userName: string;

  @Prop({ select: false })
  password: string;

  @Prop({ type: Number, default: 0 })
  current_balance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
