import { Injectable, NotFoundException } from '@nestjs/common';
import {
  BrandRepository,
  CategoryRepository,
  ProductRepository,
} from '../../../../infrastructure';
import { Product, ProductMapper } from '../../../../domain';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly brandRepository: BrandRepository,
  ) {}

  async execute(id: string, updates: Partial<Product>): Promise<Product> {
    const productEntity = await this.productRepository.findById(id);
    if (!productEntity) {
      throw new NotFoundException('Продукт не найден');
    }

    // Проверяем, существует ли новая категория
    if (updates.categoryId) {
      const categoryExists = await this.categoryRepository.findById(
        updates.categoryId,
      );
      if (!categoryExists) {
        throw new NotFoundException('Категория не найдена');
      }
      productEntity.categoryId = updates.categoryId;
      productEntity.category = categoryExists;
    }

    // Проверяем, существует ли новый бренд
    if (updates.brandId) {
      const brandExists = await this.brandRepository.findById(updates.brandId);
      if (!brandExists) {
        throw new NotFoundException('Бренд не найден');
      }
      productEntity.brandId = updates.brandId;
      productEntity.brand = brandExists;
    }

    // Обновляем остальные поля
    if (updates.name) productEntity.name = updates.name;
    if (updates.description) productEntity.description = updates.description;
    if (updates.price) productEntity.price = updates.price;

    // Сохраняем изменения
    await this.productRepository.save(productEntity);

    return ProductMapper.toDomain(productEntity);
  }
}
