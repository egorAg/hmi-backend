import { Module } from '@nestjs/common';
import { CreateProductController } from './create-product.controller';
import { CreateProductUseCase } from './create-product.usecase';
import { ProductRepository } from '../../../../infrastructure';

@Module({
  controllers: [CreateProductController],
  providers: [CreateProductUseCase, ProductRepository],
  exports: [CreateProductUseCase],
})
export class CreateProductModule {}
