import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../../../infrastructure';
import { Product, ProductMapper } from '../../../../domain';

@Injectable()
export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<Product> {
    const productEntity = await this.productRepository.findById(id);
    if (!productEntity) {
      throw new NotFoundException('Продукт не найден');
    }
    return ProductMapper.toDomain(productEntity);
  }
}
