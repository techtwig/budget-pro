import { Controller, Get, Req, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CustomRequest } from '../middleware/Auth.middleware';
import { Response } from 'express';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async getAllCategory(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      return await this.categoryService.getAllCategory();
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }
}
