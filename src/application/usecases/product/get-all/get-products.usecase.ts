import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../../infrastructure';
import { Product, ProductMapper } from '../../../../domain';

@Injectable()
export class GetProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    page: number,
    limit: number,
    categoryId?: string,
    brandId?: string,
  ): Promise<Product[]> {
    const filters: any = {};
    if (categoryId) filters.categoryId = categoryId;
    if (brandId) filters.brandId = brandId;

    const products = await this.productRepository.find({
      where: filters,
      skip: (page - 1) * limit,
      take: limit,
    });

    return products.map(ProductMapper.toDomain);
  }
}
