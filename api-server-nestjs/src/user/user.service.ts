import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDto } from './dtos/login.dto';
import { verify } from 'jsonwebtoken';
import { sign } from 'jsonwebtoken';
import process from 'process';
import { use } from 'passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly configService: ConfigService,
  ) {}

  async signup(body: SignupDto): Promise<User> {
    try {
      const { email, password, current_balance } = body;

      const checkUser = await this.userModel.findOne({ email });

      if (checkUser) {
        console.error('User exists already');
        throw new BadRequestException('User already exists');
      }

      const hashedPassword = await hash(password, 10);

      return this.userModel.create({
        email,
        password: hashedPassword,
        current_balance,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async login(body: LoginDto) {
    try {
      const { email, password } = body;

      if (!email || !password) {
        throw new BadRequestException('Invalid username or password');
      }

      const user = await this.userModel.findOne({ email }).select('+password');

      if (!user) {
        throw new BadRequestException('Invalid username or password');
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        throw new BadRequestException('Invalid username or password');
      }

      const payload = { id: user._id, email: user.email };

      const access_token_secret = this.configService.get('ACCESS_TOKEN_SECRET');
      const refresh_token_secret = this.configService.get(
        'REFRESH_TOKEN_SECRET',
      );

      const access_token = sign(payload, access_token_secret, {
        expiresIn: '1m',
      });
      const refresh_token = sign(payload, refresh_token_secret, {
        expiresIn: '30m',
      });

      return { access_token: access_token, refresh_token: refresh_token };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async refresh(body: any) {
    try {
      const { refreshToken } = body;

      if (!refreshToken) {
        throw new BadRequestException('No refresh token provided');
      }

      const refresh_token_secret = this.configService.get(
        'REFRESH_TOKEN_SECRET',
      );
      const access_token_secret = this.configService.get('ACCESS_TOKEN_SECRET');

      const decoded = verify(refreshToken, refresh_token_secret);

      const payload = { id: decoded.id, email: decoded.email };
      const access_token = sign(payload, access_token_secret, {
        expiresIn: '500m',
      });

      return { access_token };
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
