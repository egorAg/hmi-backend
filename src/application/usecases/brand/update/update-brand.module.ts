import { Module } from '@nestjs/common';
import { UpdateBrandController } from './update-brand.controller';
import { UpdateBrandUseCase } from './update-brand.usecase';
import { BrandRepository } from '../../../../infrastructure';

@Module({
  controllers: [UpdateBrandController],
  providers: [UpdateBrandUseCase, BrandRepository],
  exports: [UpdateBrandUseCase],
})
export class UpdateBrandModule {}
