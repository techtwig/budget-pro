import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeSchema } from './income.schema';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { CashbookSchema } from '../cashbook/cashbook.schema';
import { CategorySchema } from '../category/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Income', schema: IncomeSchema }]),
    MongooseModule.forFeature([
      {
        name: 'Cashbook',
        schema: CashbookSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'Category',
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [IncomeController],
  providers: [IncomeService],
})
export class IncomeModule {}
