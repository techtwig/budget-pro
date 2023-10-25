import { Controller, Get, Req } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CustomRequest } from '../middleware/Auth.middleware';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async getAllCategory(@Req() req: CustomRequest) {
    try {
      return await this.categoryService.getAllCategory();
    } catch (e) {
      throw e;
    }
  }
}
