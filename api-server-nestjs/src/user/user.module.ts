import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), ConfigModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
