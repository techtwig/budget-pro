import { Body, Controller, Get, Post } from '@nestjs/common';
import { SocialAuthService } from './social-auth.service';

@Controller('social-auth')
export class SocialAuthController {
  constructor(private readonly socialAuthService: SocialAuthService) {}

  @Post('google')
  async handleGoogleAuth(@Body() data: any) {
    // Delegate the logic to the service
    return await this.socialAuthService.validateToekn(data);
  }

  @Get('google')
  async testMethod() {
    return await this.socialAuthService.testHello();
  }
}
