import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterUseCase } from './register.usecase';
import { RegisterDto } from './register.dto';

@ApiTags('Auth')
@Controller('auth')
export class RegisterController {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  @Post('register')
  @ApiOperation({ summary: 'Регистрация пользователя' })
  @ApiResponse({ status: 201, description: 'Пользователь создан' })
  async register(@Body() dto: RegisterDto) {
    return this.registerUseCase.execute(dto.email, dto.password);
  }
}
