import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CustomRequest } from '../middleware/Auth.middleware';
import { CreateWalletDto } from './dtos/create-wallet.dto';
import { UpdateWalletDto } from './dtos/update-wallet.dto';
import { Wallet } from './wallet.schema';
import { Response } from 'express';
@Injectable()
export class WalletService {
  constructor(@InjectModel(Wallet.name) private walletModel: Model<Wallet>) {}

  async createWallet(
    req: CustomRequest,
    res: Response,
    body: CreateWalletDto,
  ): Promise<Wallet> {
    try {
      return await this.walletModel.create({ ...body, user_id: 1 });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getAllWallets() {
    try {
      return await this.walletModel.find({});
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getWalletById(req) {
    try {
      return await this.walletModel.findOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateWallet(req, body: UpdateWalletDto) {
    try {
      return await this.walletModel.findByIdAndUpdate(req.params.id, body, {
        new: true,
      });
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  async deleteWallet(req) {
    try {
      const wallet = await this.walletModel.findById(req.params.id);

      if (!wallet) {
        throw new BadRequestException('No wallet found');
      }

      return await this.walletModel.deleteOne({ _id: req.params.id });
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
