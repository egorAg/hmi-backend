import { Module } from '@nestjs/common';
import { GetProductsController } from './get-products.controller';
import { GetProductsUseCase } from './get-products.usecase';
import { ProductRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetProductsController],
  providers: [GetProductsUseCase, ProductRepository],
  exports: [GetProductsUseCase],
})
export class GetProductsModule {}
