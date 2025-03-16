import { Module } from '@nestjs/common';
import { GetBrandByIdController } from './get-brand-by-id.controller';
import { GetBrandByIdUseCase } from './get-brand-by-id.usecase';
import { BrandRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetBrandByIdController],
  providers: [GetBrandByIdUseCase, BrandRepository],
  exports: [GetBrandByIdUseCase],
})
export class GetBrandByIdModule {}
