import { Module } from '@nestjs/common';
import { UploadAndCreateProductImageController } from './upload-and-create-product-image.controller';
import { UploadAndCreateProductImageUseCase } from './upload-and-create-product-image.usecase';
import {
  ProductImageRepository,
  ProductRepository,
} from '../../../../infrastructure';

@Module({
  controllers: [UploadAndCreateProductImageController],
  providers: [
    UploadAndCreateProductImageUseCase,
    ProductImageRepository,
    ProductRepository,
  ],
  exports: [UploadAndCreateProductImageUseCase],
})
export class UploadAndCreateProductImageModule {}
