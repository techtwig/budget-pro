import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getAllCategory() {
    try {
      const categories = await this.categoryModel.find();
      return { data: categories, status: HttpStatus.OK };
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
