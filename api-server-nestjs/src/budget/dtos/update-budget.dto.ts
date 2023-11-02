export class UpdateBudgetDto {
  budget_title?: string;

  amount?: number;

  wallet_id?: string;

  category_ids?: string;

  month?: Date;
}
