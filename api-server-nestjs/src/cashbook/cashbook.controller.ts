import { Controller, Get, Req, Res } from "@nestjs/common";
import { IncomeService } from "../income/income.service";
import { CashbookService } from "./cashbook.service";
import { CustomRequest } from "../middleware/Auth.middleware";
import { Response } from "express";

@Controller("cashbook")
export class CashbookController {

  constructor(private readonly cashbookService: CashbookService) {
  }

  @Get()
  async getIncomesByMonth(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const cashbook = await this.cashbookService.getAllCashbook(req);

      res.json({
        status: 200,
        cashbook
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }

}
