import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { CategoryEntity } from '../database';

@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity> {
  constructor(dataSource: DataSource) {
    super(CategoryEntity, dataSource);
  }
}
