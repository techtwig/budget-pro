import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cashbook } from '../cashbook/cashbook.schema';
import { Category } from '../category/category.schema';
import { Budget } from './budget.schema';
import { CustomRequest } from '../middleware/Auth.middleware';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';

@Injectable()
export class BudgetService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<Budget>,
    @InjectModel(Cashbook.name) private cashbookModel: Model<Cashbook>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createBudget(
    req: CustomRequest,
    body: CreateBudgetDto,
  ): Promise<Budget> {
    try {
      // body.user_id = new Types.ObjectId(req.userId);
      body.user_id = '2';

      return await this.budgetModel.create(body);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getAllBudgets() {
    try {
      return await this.budgetModel.find();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getTotalBudgets() {
    try {
      return await this.budgetModel.find({});
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getBudgetsByMonth(req) {
    try {
      const { month } = req.query;
      const userId = new Types.ObjectId(req.userId);
      return await this.budgetModel.find({ budget_amount: month, userId });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getBudgetById(req) {
    try {
      return await this.budgetModel.findOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateBudget(req, body: UpdateBudgetDto) {
    try {
      return await this.budgetModel.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  async deleteBudget(req) {
    try {
      const budget = await this.budgetModel.findById(req.params.id);

      if (!budget) {
        throw new BadRequestException('No Budget found');
      }

      return await this.budgetModel.deleteOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
