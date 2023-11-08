import { InjectModel } from '@nestjs/mongoose';
import { Income } from './income.schema';
import { Model, Types } from 'mongoose';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { CreateIncomeDto } from './dtos/create-income.dto';
import { CustomRequest } from '../middleware/Auth.middleware';
import { Cashbook } from '../cashbook/cashbook.schema';
import { Category } from '../category/category.schema';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(Income.name) private incomeModel: Model<Income>,
    @InjectModel(Cashbook.name) private cashbookModel: Model<Cashbook>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createIncome(
    req: CustomRequest,
    body: CreateIncomeDto,
  ): Promise<Income> {
    try {
      // const userId = new Types.ObjectId(req.userId);
      body.user_id = '3';
      //
      // const categoryName = body.category;
      // const category = await this.categoryModel.create({
      //   name: categoryName,
      //   type: "income"
      // });

      // body.categoryId = category._id;

      return await this.incomeModel.create(body);

      //
      // const lastCashbook = await this.cashbookModel.findOne(
      //   { userId },
      //   {},
      //   { sort: { _id: -1 } }
      // );
      // //
      // let currentBalance = 0;
      // if (lastCashbook)
      //   currentBalance = lastCashbook.currentBalance + body.income_amount;
      // else currentBalance = body.income_amount;
      // //
      // await this.cashbookModel.create({
      //   userId,
      //   incomeId: incomeDocument._id,
      //   currentBalance
      // });

      // return incomeDocument;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getAllIncome() {
    try {
      return await this.incomeModel.find({});
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getIncomesByMonth(req) {
    try {
      const { month } = req.query;

      const userId = new Types.ObjectId(req.userId);
      return await this.incomeModel.find({ income_month: month, userId });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getIncomeById(req) {
    try {
      return await this.incomeModel.findOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateIncome(req, body) {
    try {
      return await this.incomeModel.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  async deleteIncome(req) {
    try {
      const income = await this.incomeModel.findById(req.params.id);
      const userId = new Types.ObjectId(req.userId);
      const lastCashbook = await this.cashbookModel.findOne(
        { userId },
        {},
        { sort: { _id: -1 } },
      );

      if (!lastCashbook.incomeId.equals((income as any)._id)) {
        throw new UnauthorizedException("You can't delete this income");
      }

      await this.cashbookModel.findOneAndDelete({ incomeId: income._id });

      return await this.incomeModel.deleteOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
