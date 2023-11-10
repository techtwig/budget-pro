import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomRequest } from '../middleware/Auth.middleware';
import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { JoiValidationPipe } from '../validation-pipe/validation.pipe';
import { createBudgetValidationSchema } from './validation-schema/create-budget.validation.schema';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('create')
  async createBudget(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body(new JoiValidationPipe(createBudgetValidationSchema))
    body: CreateBudgetDto,
  ) {
    try {
      const budget = await this.budgetService.createBudget(req, body);

      res.json({
        status: 201,
        message: 'success',
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get()
  async getAllBudget(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const budget = await this.budgetService.getAllBudgets();

      res.json({
        status: 200,
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get('total')
  async getTotalBudget(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const budget = await this.budgetService.getTotalBudgets();

      res.json({
        status: 200,
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get('month')
  async getBudgetsByMonth(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const budget = await this.budgetService.getBudgetsByMonth(req);

      res.json({
        status: 200,
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get(':id')
  async getBudgetById(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const budget = await this.budgetService.getBudgetById(req);
      if (!budget) {
        return res.json({
          status: 200,
          message: 'No budget found',
        });
      }
      res.json({
        status: 200,
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Put(':id')
  async updateBudget(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body() body: UpdateBudgetDto,
  ) {
    try {
      const budget = await this.budgetService.updateBudget(req, body);
      if (!budget) {
        return res.json({
          status: 200,
          message: 'No budget found',
        });
      }
      res.json({
        status: 200,
        budget,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Delete(':id')
  async deleteBudget(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const budget = await this.budgetService.deleteBudget(req);
      if (!budget) {
        return res.json({
          status: 200,
          message: 'No budget found',
        });
      }
      res.json({
        status: 200,
        budget: null,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }
}
