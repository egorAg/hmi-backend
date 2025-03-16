import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { UploadAndCreateProductImageUseCase } from './upload-and-create-product-image.usecase';
import { UploadProductImageDto } from './upload-and-create-product-image.dto';

@ApiTags('Product Images')
@Controller('product-image')
export class UploadAndCreateProductImageController {
  constructor(
    private readonly uploadAndCreateProductImageUseCase: UploadAndCreateProductImageUseCase,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/product-images',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @ApiOperation({ summary: 'Загрузка изображения продукта' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Форма загрузки изображения',
    type: UploadProductImageDto,
  }) // Исправлено
  @ApiResponse({ status: 201, description: 'Изображение загружено' })
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadProductImageDto: UploadProductImageDto,
  ) {
    return this.uploadAndCreateProductImageUseCase.execute(
      uploadProductImageDto.productId,
      file.filename,
    );
  }
}
