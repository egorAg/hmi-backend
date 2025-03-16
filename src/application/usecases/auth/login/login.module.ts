import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './login.controller';
import { LoginUseCase } from './login.usecase';
import { UserRepository } from '@infrastructure/repositories/user.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginUseCase, UserRepository],
})
export class LoginModule {}
