import {Body, Controller, Delete, Get, Post, Put, Req, Res} from "@nestjs/common";
import {Response} from "express";
import {CustomRequest} from "../middleware/Auth.middleware";
import {CreateExpenseDto} from "./dtos/create-expense.dto";
import {UpdateExpenseDto} from "./dtos/update-expense.dto";
import {ExpenseService} from "./expense.service";

@Controller("expense")
export class ExpenseController {

  constructor(private readonly expenseService: ExpenseService) {
  }

  @Post("create")
  async createExpense(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body() body: CreateExpenseDto
  ) {
    try {
      const expense = await this.expenseService.createExpense(req, body);

      res.json({
        status: 201,
        message: "success",
        expense
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }


  @Get()
  async getAllExpense(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const expense = await this.expenseService.getAllExpense();

      res.json({
        status: 200,
        expense
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }

  @Get("month")
  async getExpensesByMonth(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const expense = await this.expenseService.getExpensesByMonth(req);

      res.json({
        status: 200,
        expense
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }

  @Get(":id")
  async getExpenseById(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const expense = await this.expenseService.getExpenseById(req);
      if (!expense) {
        return res.json({
          status: 200,
          message: "No expense found"
        });
      }
      res.json({
        status: 200,
        expense
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }

  @Put(":id")

  async updateExpense(@Req() req: CustomRequest, @Res() res: Response, @Body() body: UpdateExpenseDto) {
    try {
      const expense = await this.expenseService.updateExpense(req, body);
      if (!expense) {
        return res.json({
          status: 200,
          message: "No Expense found"
        });
      }
      res.json({
        status: 200,
        expense
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }


  @Delete(":id")

  async deleteExpense(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const expense = await this.expenseService.deleteExpense(req);
      if (!expense) {
        return res.json({
          status: 200,
          message: "No expense found"
        });
      }
      res.json({
        status: 200,
        expense: null
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message
      });
    }
  }

}
