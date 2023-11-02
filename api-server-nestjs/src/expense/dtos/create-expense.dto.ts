export class CreateExpenseDto {
  title: string;

  balance: number;

  wallet_id: string;

  category_ids: string[];

  date: string;

  user_id: string;
}
