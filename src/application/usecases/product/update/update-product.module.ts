import { Module } from '@nestjs/common';
import { UpdateProductController } from './update-product.controller';
import { UpdateProductUseCase } from './update-product.usecase';
import {
  BrandRepository,
  CategoryRepository,
  ProductRepository,
} from '../../../../infrastructure';

@Module({
  controllers: [UpdateProductController],
  providers: [
    UpdateProductUseCase,
    ProductRepository,
    CategoryRepository,
    BrandRepository,
  ],
  exports: [UpdateProductUseCase],
})
export class UpdateProductModule {}
