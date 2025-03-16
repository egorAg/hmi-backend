import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterUseCase } from './register.usecase';
import { UserRepository } from '@infrastructure/repositories';

@Module({
  controllers: [RegisterController],
  providers: [RegisterUseCase, UserRepository],
  exports: [RegisterUseCase],
})
export class RegisterModule {}
