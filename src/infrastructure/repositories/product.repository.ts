import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { ProductEntity } from '../database';

@Injectable()
export class ProductRepository extends BaseRepository<ProductEntity> {
  constructor(dataSource: DataSource) {
    super(ProductEntity, dataSource);
  }

  async findWithImages(productId: string): Promise<ProductEntity | null> {
    return this.findOne({
      where: { id: productId },
      relations: ['images'],
    });
  }
}
