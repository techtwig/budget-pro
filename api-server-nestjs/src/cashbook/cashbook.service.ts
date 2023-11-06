import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Types} from "mongoose";
import {Expense} from "../expense/expense.schema";
import {Income} from "../income/income.schema";
import {Cashbook} from "./cashbook.schema";

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
