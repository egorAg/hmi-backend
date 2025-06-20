import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { BrandEntity } from '../database';

@Injectable()
export class BrandRepository extends BaseRepository<BrandEntity> {
  constructor(dataSource: DataSource) {
    super(BrandEntity, dataSource);
  }

  async findByName(name: string): Promise<BrandEntity | null> {
    return this.findOne({ where: { name } });
  }

  async findWithPagination(page: number, limit: number): Promise<{ brands: BrandEntity[]; totalCount: number }> {
    const [brands, totalCount] = await this.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { name: 'ASC' }, // по желанию
    });

    return {
      brands,
      totalCount,
    };
  }
}
