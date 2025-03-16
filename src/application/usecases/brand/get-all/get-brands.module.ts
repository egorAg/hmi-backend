import { Module } from '@nestjs/common';
import { GetBrandsController } from './get-brands.controller';
import { GetBrandsUseCase } from './get-brands.usecase';
import { BrandRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetBrandsController],
  providers: [GetBrandsUseCase, BrandRepository],
  exports: [GetBrandsUseCase],
})
export class GetBrandsModule {}
