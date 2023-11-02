import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cashbook } from '../cashbook/cashbook.schema';
import { Category } from '../category/category.schema';
import { CustomRequest } from '../middleware/Auth.middleware';
import { CreateExpenseDto } from './dtos/create-expense.dto';
import { UpdateExpenseDto } from './dtos/update-expense.dto';
import { Expense } from './expense.schema';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<Expense>,
    @InjectModel(Cashbook.name) private cashbookModel: Model<Cashbook>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createExpense(
    req: CustomRequest,
    body: CreateExpenseDto,
  ): Promise<Expense> {
    try {
      // const userId = new Types.ObjectId(req.userId);
      // console.log('aa');
      // throw new HttpException('something went wrong', 400);
      body.user_id = '6';

      // const lastCashbook = await this.cashbookModel.findOne(
      //   { userId },
      //   {},
      //   { sort: { _id: -1 } },
      // );
      //
      // let currentBalance = -1;
      //
      // if (lastCashbook)
      //   currentBalance = lastCashbook.currentBalance - req.body.expenseAmount;
      //
      // if (currentBalance < 0) {
      //   throw new Error('Current balance cant be less than 0');
      // }
      // //
      // const categoryName = body.category;
      // const category = await this.categoryModel.create({
      //   name: categoryName,
      //   type: 'expense',
      // });
      //
      // body.categoryId = category._id;

      return await this.expenseModel.create(body);
    } catch (e) {
      throw e;
    }
  }

  async getAllExpense() {
    try {
      return await this.expenseModel.find({});
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getExpensesByMonth(req) {
    try {
      const { month } = req.query;

      const userId = new Types.ObjectId(req.userId);
      return await this.expenseModel.find({ expenseMonth: month, userId });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getExpenseById(req) {
    try {
      return await this.expenseModel.findOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateExpense(req, body: UpdateExpenseDto) {
    try {
      return await this.expenseModel.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  // async deleteExpense(req) {
  //   try {
  //     const expense = await this.expenseModel.findById(req.params.id);
  //     const userId = new Types.ObjectId(req.userId);
  //     const lastCashbook = await this.cashbookModel.findOne(
  //       { userId },
  //       {},
  //       { sort: { _id: -1 } },
  //     );
  //
  //     if (!lastCashbook.expenseId.equals((expense as any)._id)) {
  //       throw new UnauthorizedException("You can't delete this expense");
  //     }
  //
  //     await this.cashbookModel.findOneAndDelete({ expenseId: expense._id });
  //
  //     return await this.expenseModel.deleteOne({ _id: req.params.id });
  //   } catch (e) {
  //     throw new Error(e.message);
  //   }
  // }
}
