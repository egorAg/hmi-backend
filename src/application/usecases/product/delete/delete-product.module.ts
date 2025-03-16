import { Module } from '@nestjs/common';
import { DeleteProductController } from './delete-product.controller';
import { DeleteProductUseCase } from './delete-product.usecase';
import { ProductRepository } from '../../../../infrastructure';

@Module({
  controllers: [DeleteProductController],
  providers: [DeleteProductUseCase, ProductRepository],
  exports: [DeleteProductUseCase],
})
export class DeleteProductModule {}
