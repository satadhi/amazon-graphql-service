import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @UseGuards(LocalAuthGuard) // this guys extracts the user into and sets it to req.user
  async login(
    @CurrentUser() user: User, // this guys will again extract there user from the req.user, and pass it as a simple param

    // When you use the @Res() decorator in a method parameter, NestJS injects the Response object from Express.js
    // into that parameter.This object allows you to control the HTTP response sent to the client, such as setting
    // cookies, sending status codes, or returning data.
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
  }
}
