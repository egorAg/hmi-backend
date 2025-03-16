import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginUseCase } from './login.usecase';
import { LoginDto } from './login.dto';

@ApiTags('Auth')
@Controller('auth')
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiResponse({ status: 200, description: 'JWT-токен' })
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto.email, dto.password);
  }
}
