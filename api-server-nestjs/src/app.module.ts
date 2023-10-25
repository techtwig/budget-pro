import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './middleware/Auth.middleware';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { CashbookModule } from './cashbook/cashbook.module';
import { BudgetModule } from './budget/budget.module';
import { CategoryModule } from './category/category.module';
import { WalletModule } from './wallet/wallet.module';
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URI),
    UserModule,
    IncomeModule,
    ExpenseModule,
    CashbookModule,
    BudgetModule,
    CategoryModule,
    WalletModule,
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
