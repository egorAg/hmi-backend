import { Module } from '@nestjs/common';
import { CreateBrandController } from './create-brand.controller';
import { CreateBrandUseCase } from './create-brand.usecase';
import { BrandRepository } from '@infrastructure/repositories';

@Module({
  controllers: [CreateBrandController],
  providers: [CreateBrandUseCase, BrandRepository],
  exports: [CreateBrandUseCase],
})
export class CreateBrandModule {}
