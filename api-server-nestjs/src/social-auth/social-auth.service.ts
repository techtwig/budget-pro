import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class SocialAuthService {
  //constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  validateToekn = (data: any) => {
    return { message: 'Social login route hited' };
    console.log('okkkkk');
  };

  testHello = () => {
    return { message: 'hello from google' };
  };
}
