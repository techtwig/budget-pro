export class CreateBudgetDto {
  budget_title: string;

  amount: number;

  wallet_id: string;

  category_ids: string[];

  month: Date;

  user_id: string;
}
