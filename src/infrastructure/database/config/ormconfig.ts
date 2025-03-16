import 'reflect-metadata';

import { DataSourceOptions } from 'typeorm';
import {
  BrandEntity,
  CategoryEntity,
  ProductEntity,
  ProductImageEntity,
  UserEntity,
} from '../entities';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST', 'localhost'),
  port: configService.get<number>('DATABASE_PORT', 5432),
  username: configService.get<string>('DATABASE_USER', 'postgres'),
  password: configService.get<string>('DATABASE_PASSWORD', 'mysecretpassword'),
  database: configService.get<string>('DATABASE_NAME', 'mydatabase'),
  entities: [
    BrandEntity,
    CategoryEntity,
    ProductEntity,
    ProductImageEntity,
    UserEntity,
  ],
  migrations: ['src/infrastructure/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
};

export default ormconfig;
