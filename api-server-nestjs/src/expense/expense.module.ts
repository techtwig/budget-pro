import { Module } from "@nestjs/common";
import { ExpenseController } from "./expense.controller";
import { ExpenseService } from "./expense.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CashbookSchema } from "../cashbook/cashbook.schema";
import { CategorySchema } from "../category/category.schema";
import { ExpenseSchema } from "./expense.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Expense", schema: ExpenseSchema }]),
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
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {
}
