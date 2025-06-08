import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { CategoryEntity } from '../database';

@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity> {
  constructor(dataSource: DataSource) {
    super(CategoryEntity, dataSource);
  }

  async findWithPagination(page: number, limit: number): Promise<{ categories: CategoryEntity[]; totalCount: number }> {
    const [categories, totalCount] = await this.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { name: 'ASC' },
    });

    return {
      categories,
      totalCount,
    };
  }
}
