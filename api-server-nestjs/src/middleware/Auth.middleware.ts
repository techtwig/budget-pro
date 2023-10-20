import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import * as process from 'process';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from '../wallet/wallet.schema';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';

export interface CustomRequest extends Request {
  userId?: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  // constructor(@InjectModel(Wallet.name) private userModel: Model<User>) {}
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      const token = authorization && authorization.split(' ')[1];
      if (!token) throw new Error('No token found');
      const decoded = verify(token, 'secret');
      const { id } = decoded;
      //
      // const user = await this.userModel.findOne({ _id: id });
      // if (!user) throw new Error('User not found');

      req.userId = id;
      next();
    } catch (e) {
      next(e.message);
    }
  }
}
