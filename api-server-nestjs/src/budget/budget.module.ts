import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {CashbookSchema} from "../cashbook/cashbook.schema";
import {CategorySchema} from "../category/category.schema";
import {BudgetController} from "./budget.controller";
import {BudgetSchema} from "./budget.schema";
import {BudgetService} from "./budget.service";

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
