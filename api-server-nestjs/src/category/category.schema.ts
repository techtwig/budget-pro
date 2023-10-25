import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop()
  label: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
