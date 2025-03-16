import { Module } from '@nestjs/common';
import { DeleteBrandController } from './delete-brand.controller';
import { DeleteBrandUseCase } from './delete-brand.usecase';
import { BrandRepository } from '../../../../infrastructure';

@Module({
  controllers: [DeleteBrandController],
  providers: [DeleteBrandUseCase, BrandRepository],
  exports: [DeleteBrandUseCase],
})
export class DeleteBrandModule {}
