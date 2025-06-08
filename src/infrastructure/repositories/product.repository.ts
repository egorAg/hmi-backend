import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { ProductEntity } from '../database';

@Injectable()
export class ProductRepository extends BaseRepository<ProductEntity> {
  constructor(dataSource: DataSource) {
    super(ProductEntity, dataSource);
  }

  async findWithPaginationAndImages(
    page: number,
    limit: number,
    filters: { categoryId?: string; brandId?: string } = {},
  ): Promise<{ products: ProductEntity[]; totalCount: number }> {
    const where: any = {};

    if (filters.categoryId) {
      where.categoryId = filters.categoryId;
    }

    if (filters.brandId) {
      where.brandId = filters.brandId;
    }

    const [products, totalCount] = await this.findAndCount({
      where,
      relations: ['images'],
      skip: (page - 1) * limit,
      take: limit,
    });

    return { products, totalCount };
  }
}
