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
import 'dotenv/config';
// import { AuthModule } from './auth/auth.module';
import { SocialAuthModule } from './social-auth/social-auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/budget-app'),
    ConfigModule.forRoot(),
    UserModule,
    IncomeModule,
    ExpenseModule,
    CashbookModule,
    BudgetModule,
    CategoryModule,
    // AuthModule,
    SocialAuthModule,
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
