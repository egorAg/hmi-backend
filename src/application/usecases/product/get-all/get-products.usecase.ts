import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../../infrastructure';
import { Product, ProductMapper } from '@domain/product';

@Injectable()
export class GetProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    page: number,
    limit: number,
    categoryId?: string,
    brandId?: string,
  ): Promise<{ products: Product[]; totalCount: number }> {
    const { products: entities, totalCount } =
      await this.productRepository.findWithPaginationAndImages(page, limit, {
        categoryId,
        brandId,
      });

    const products = entities.map(ProductMapper.toDomain);

    return { products, totalCount };
  }
}
