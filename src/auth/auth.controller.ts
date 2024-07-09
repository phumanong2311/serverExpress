import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // async login(@Body() body: any), @CurrentUser() user: Users{
  async login(@Body() body: any) {
    const { email, password } = body;
    const token = await this.authService.login(email, password);
    return token;
  }
}
