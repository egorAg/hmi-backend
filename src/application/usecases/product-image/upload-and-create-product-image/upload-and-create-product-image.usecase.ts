import { Injectable, NotFoundException } from '@nestjs/common';
import { join } from 'path';
import {
  ProductImageRepository,
  ProductRepository,
} from '../../../../infrastructure';
import { ProductImage, ProductMapper } from '../../../../domain';

@Injectable()
export class UploadAndCreateProductImageUseCase {
  constructor(
    private readonly productImageRepository: ProductImageRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(productId: string, filename: string) {
    const productRaw = await this.productRepository.findById(productId);

    if (!productRaw) {
      throw new NotFoundException('Продукт не найден');
    }

    const productDomain = ProductMapper.toDomain(productRaw);

    const imagePath = join('uploads', 'product-images', filename);
    const productImage = ProductImage.create({
      productId,
      url: imagePath,
      product: productDomain,
    });

    return this.productImageRepository.create(productImage);
  }
}
