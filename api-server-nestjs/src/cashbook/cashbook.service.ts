import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Income } from "../income/income.schema";
import { Model, Types } from "mongoose";
import { Cashbook } from "./cashbook.schema";
import { Category } from "../category/category.schema";
import { Expense } from "../expense/expense.schema";

@Injectable()
export class CashbookService {

  constructor(
    @InjectModel(Cashbook.name) private cashbookModel: Model<Cashbook>
  ) {
  }

  async getAllCashbook(req) {
    try {
      return await this.cashbookModel.find({ userId: new Types.ObjectId(req.userId) }).populate({
        path: "incomeId",
        model: "Income"
      })
        .populate({ path: "expenseId", model: "Expense" });

    } catch (e) {
      throw new Error(e.message);
    }
  }
}
