import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Expense, ExpenseSchema } from "../expense/expense.schema";
import { CashbookController } from "./cashbook.controller";
import { CashbookService } from "./cashbook.service";
import { Cashbook, CashbookSchema } from "./cashbook.schema";
import { Income, IncomeSchema } from "../income/income.schema";


@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: Cashbook.name,
        schema: CashbookSchema
      }
    ]),
    MongooseModule.forFeature([{ name: Income.name, schema: IncomeSchema }]),
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }])
  ],
  controllers: [CashbookController],
  providers: [CashbookService]
})
export class CashbookModule {

}
