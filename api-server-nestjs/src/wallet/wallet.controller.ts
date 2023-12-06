import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CustomRequest } from '../middleware/Auth.middleware';
import { Response } from 'express';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dtos/create-wallet.dto';
import { UpdateWalletDto } from './dtos/update-wallet.dto';
import { JoiValidationPipe } from '../validation-pipe/validation.pipe';
import { createWalletValidationSchema } from './validation-schema/create-wallet.validation.schema';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  async createWallet(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body(new JoiValidationPipe(createWalletValidationSchema))
    body: CreateWalletDto,
  ) {
    try {
      const wallet = await this.walletService.createWallet(req, body);

      res.json({
        status: 201,
        message: 'success',
        wallet,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Get()
  async getAllWallet(@Req() req: CustomRequest) {
    try {
      return await this.walletService.getAllWallets();
    } catch (e) {
      throw e;
    }
  }

  @Get(':id')
  async getBudgetById(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const wallet = await this.walletService.getWalletById(req);
      if (!wallet) {
        return res.json({
          status: 404,
          message: 'No wallet found',
        });
      }
      res.json({
        status: 200,
        wallet,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Put(':id')
  async updateBudget(
    @Req() req: CustomRequest,
    @Res() res: Response,
    @Body() body: UpdateWalletDto,
  ) {
    try {
      const wallet = await this.walletService.updateWallet(req, body);
      if (!wallet) {
        return res.json({
          status: 404,
          message: 'No wallet found',
        });
      }
      res.json({
        status: 200,
        data: wallet,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Delete(':id')
  async deleteBudget(@Req() req: CustomRequest, @Res() res: Response) {
    try {
      const wallet = await this.walletService.deleteWallet(req);
      if (!wallet) {
        return res.json({
          status: 404,
          message: 'No wallet found',
        });
      }
      res.json({
        status: 200,
        wallet: null,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
      });
    }
  }
}
