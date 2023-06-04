import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model } from "mongoose";
import { BadRequestException, Injectable } from "@nestjs/common";
import { SignupDto } from "./dtos/signup.dto";
import { hash, compare } from "bcryptjs";
import { LoginDto } from "./dtos/login.dto";
import { sign } from "jsonwebtoken";
import process from "process";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async signup(body: SignupDto): Promise<User> {
    try {
      const { name, email, password, username, current_balance } = body;

      const checkUser = await this.userModel.findOne({ email });

      if (checkUser) {
        console.error("User exists already");
        throw new BadRequestException("User already exists");
      }

      const hashedPassword = await hash(password, 10);

      return this.userModel.create({
        name,
        email,
        username,
        password: hashedPassword,
        current_balance
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async login(body: LoginDto) {
    try {
      const { userName, password } = body;

      const user = await this.userModel
        .findOne({ userName })
        .select("+password");

      console.log(user);
      if (!user) {
        throw new BadRequestException("Invalid username or password");
      }

      const isValidPassword = await compare(password, user.password);
      if (!isValidPassword) {
        throw new BadRequestException("Invalid username or password");
      }
      return sign(
        {
          id: user._id
        },
        "secret",
        {
          expiresIn: "30d"
        }
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
