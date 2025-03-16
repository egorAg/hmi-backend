import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateBrandModule,
  DeleteBrandModule,
  GetBrandByIdModule,
  UpdateBrandModule,
  GetBrandsModule,
  CreateCategoryModule,
  GetCategoryByIdModule,
  GetCategoriesModule,
  UpdateCategoryModule,
  DeleteCategoryModule,
  CreateProductModule,
  DeleteProductModule,
  GetProductByIdModule,
  GetProductsModule,
  UpdateProductModule,
  UploadAndCreateProductImageModule,
  RegisterModule,
  LoginModule,
} from '@application/usecases';
import * as path from 'node:path';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

const BRAND_MODULES = [
  CreateBrandModule,
  GetBrandByIdModule,
  GetBrandsModule,
  UpdateBrandModule,
  DeleteBrandModule,
];

const CATEGORY_MODULES = [
  CreateCategoryModule,
  GetCategoryByIdModule,
  GetCategoriesModule,
  UpdateCategoryModule,
  DeleteCategoryModule,
];

const PRODUCT_MODULES = [
  CreateProductModule,
  GetProductByIdModule,
  GetProductsModule,
  UpdateProductModule,
  DeleteProductModule,
];

const AUTH_MODULES = [RegisterModule, LoginModule];

const PRODUCT_IMAGE_MODULES = [UploadAndCreateProductImageModule];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST', 'localhost'),
        port: configService.get<number>('DATABASE_PORT', 5432),
        username: configService.get<string>('DATABASE_USER', 'postgres'),
        password: configService.get<string>(
          'DATABASE_PASSWORD',
          'mysecretpassword',
        ),
        database: configService.get<string>('DATABASE_NAME', 'mydatabase'),
        entities: [
          path.join(__dirname, 'infrastructure/database/entities/*.{ts,js}'),
        ],
        synchronize: false,
        autoLoadEntities: true,
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    ...BRAND_MODULES,
    ...CATEGORY_MODULES,
    ...PRODUCT_MODULES,
    ...PRODUCT_IMAGE_MODULES,
    ...AUTH_MODULES,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
