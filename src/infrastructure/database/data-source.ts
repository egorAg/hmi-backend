import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ormconfig } from './config';

export const AppDataSource = new DataSource({
  ...ormconfig,
  synchronize: false,
  migrationsRun: true,
  logging: true,
} as any);
