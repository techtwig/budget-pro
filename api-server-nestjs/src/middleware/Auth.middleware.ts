import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import * as process from "process";
import {ConfigService} from "@nestjs/config";

export interface CustomRequest extends Request {
  userId?: string;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly configService: ConfigService) {

  }
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      const access_token_secret = this.configService.get('ACCESS_TOKEN_SECRET');

      const token = authorization && authorization.split(" ")[1];
      if (!token) throw new Error("No token found");
      const decoded = verify(token, access_token_secret);
      const { id } = decoded;
      req.userId = id;
      next();
    } catch (e) {

      next(e.message);
    }
  }
}
