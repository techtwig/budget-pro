import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDto } from './dtos/login.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

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

      const user = await this.userModel.findOne({ email }).select('+password');

      console.log(user);
      if (!user) {
        throw new BadRequestException('Invalid email or password');
      }

      const isValidPassword = await compare(password, user.password);
      if (!isValidPassword) {
        throw new BadRequestException('Invalid email or password');
      }
      return sign(
        {
          id: user._id,
        },
        'secret',
        {
          expiresIn: '30d',
        },
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
