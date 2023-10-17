import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './middleware/Auth.middleware';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { CashbookController } from './cashbook/cashbook.controller';
import { CashbookService } from './cashbook/cashbook.service';
import { CashbookModule } from './cashbook/cashbook.module';
import { BudgetModule } from './budget/budget.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/budget-app'),
    UserModule,
    IncomeModule,
    ExpenseModule,
    CashbookModule,
    BudgetModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('income/*', 'cashbook', 'expense/*', 'budget/*');
  }
}
