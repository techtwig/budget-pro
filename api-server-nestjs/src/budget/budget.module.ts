import { Module } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { IncomeSchema } from "../income/income.schema";
import { CashbookSchema } from "../cashbook/cashbook.schema";
import { CategorySchema } from "../category/category.schema";
import { BudgetSchema } from "./budget.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Budget", schema: BudgetSchema }]),
    MongooseModule.forFeature([
      {
        name: "Cashbook",
        schema: CashbookSchema
      }
    ]),
    MongooseModule.forFeature([
      {
        name: "Category",
        schema: CategorySchema
      }
    ])
  ],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {
}
