import { Injectable, NotFoundException } from '@nestjs/common';
import { join } from 'path';
import {
  ProductImageRepository,
  ProductRepository,
} from '../../../../infrastructure';
import {
  ProductImage,
  ProductImageMapper,
  ProductMapper,
} from '../../../../domain';

@Injectable()
export class UploadAndCreateProductImageUseCase {
  constructor(
    private readonly productImageRepository: ProductImageRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(productId: string, filename: string) {
    const productRaw = await this.productRepository.findById(productId);
    console.log(
      `Загружаем изображение для продукта с ID: ${productId}, имя файла: ${filename}`,
    );
    console.log(`Полученный продукт: ${JSON.stringify(productRaw)}`);

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
    console.log(
      `Создаём изображение продукта: ${JSON.stringify(productImage)}`,
    );
    // Сохраняем изображение в репозитории
    const presistanceImage = ProductImageMapper.toPersistence(productImage);
    console.log(
      `Сохраняем изображение в репозитории: ${JSON.stringify(presistanceImage)}`,
    );
    return this.productImageRepository.save(presistanceImage);
  }
}
