import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../../../infrastructure';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<void> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new NotFoundException('Продукт не найден');
    }

    await this.productRepository.deleteById(id);
  }
}
