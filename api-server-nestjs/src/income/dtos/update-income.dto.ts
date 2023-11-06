export class UpdateIncomeDto {
  title?: string;

  balance?: number;

  wallet_id?: number;

  category_ids: string[];

  date: string;
}
