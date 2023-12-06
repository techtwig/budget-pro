import {BadRequestException, Body, Controller, Post, Res} from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dtos/signup.dto';
import { Response } from 'express';
import { LoginDto } from './dtos/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() body: SignupDto, @Res() res: Response) {
    try {
      console.log('here 1');
      const user = await this.userService.signup(body);

      res.json({
        status: 201,
        message: 'signed up successfully',
        user,
      });
    } catch (e) {
      res.json({
        status: 500,
        message: e.message,
        user: null,
      });
    }
  }
  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response) {
    try {
      if (!body || !body.email || !body.password) {
        throw new BadRequestException("Invalid request. Please provide email and password.");
      }

      const token = await this.userService.login(body);
      res.json({
        status: 200,
        message: 'Login successfully',
        token,
      });
    } catch (e) {
      res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

  @Post('refresh-token')
  async refreshToken(@Body() body: any, @Res() res: Response) {
    try {
      if (!body || !body.refreshToken) {
        throw new BadRequestException("No refresh token provided");
      }

      const token = await this.userService.refresh(body);
      res.json({
        status: 200,
        message: 'New access token generated successfully',
        token,
      });
    } catch (e) {
      res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

}
