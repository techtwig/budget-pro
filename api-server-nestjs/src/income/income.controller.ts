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
import { IncomeService } from './income.service';
import { Response } from 'express';
import { CreateIncomeDto } from './dtos/create-income.dto';
import { CustomRequest } from '../middleware/Auth.middleware';
import { UpdateIncomeDto } from './dtos/update-income.dto';
import { result } from '../dammy data/dammy_data_dashboard';
import { JoiValidationPipe } from '../validation-pipe/validation.pipe';
import { createIncomeSchema } from './validation-schema/create-income.schema';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Post('create')
  async createIncome(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body(new JoiValidationPipe(createIncomeSchema)) body: CreateIncomeDto,
  ) {
    try {
      const income = await this.incomeService.createIncome(req, body);

      res.json({
        status: 201,
        message: 'success',
        data: income,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get()
  async getAllIncome(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const income = await this.incomeService.getAllIncome();

      res.json({
        status: 200,
        message: 'successfully data got',
        // data: income,
        data: result,
      });
      // return {
      // data: income}
      //
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get('month')
  async getIncomesByMonth(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const income = await this.incomeService.getIncomesByMonth(req);

      res.json({
        status: 200,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get(':id')
  async getIncomeById(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const income = await this.incomeService.getIncomeById(req);
      if (!income) {
        return res.json({
          status: 200,
          message: 'No income found',
        });
      }
      res.json({
        status: 200,
        income,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Put(':id')
  async updateIncome(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body() body: UpdateIncomeDto,
  ) {
    try {
      const income = await this.incomeService.updateIncome(req, body);
      if (!income) {
        return res.json({
          status: 200,
          message: 'No income found',
        });
      }
      res.json({
        status: 200,
        income,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Delete(':id')
  async deleteIncome(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const income = await this.incomeService.deleteIncome(req);
      if (!income) {
        return res.json({
          status: 200,
          message: 'No income found',
        });
      }
      res.json({
        status: 200,
        income: null,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }
}
