import { Module } from '@nestjs/common';
import { GetProductByIdController } from './get-product-by-id.controller';
import { GetProductByIdUseCase } from './get-product-by-id.usecase';
import { ProductRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetProductByIdController],
  providers: [GetProductByIdUseCase, ProductRepository],
  exports: [GetProductByIdUseCase],
})
export class GetProductByIdModule {}
