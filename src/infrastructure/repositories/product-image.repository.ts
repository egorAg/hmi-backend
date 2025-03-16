import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { ProductImageEntity } from '../database';

@Injectable()
export class ProductImageRepository extends BaseRepository<ProductImageEntity> {
  constructor(dataSource: DataSource) {
    super(ProductImageEntity, dataSource);
  }
}
