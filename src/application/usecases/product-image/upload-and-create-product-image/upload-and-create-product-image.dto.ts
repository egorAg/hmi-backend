import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UploadProductImageDto {
  @ApiProperty({ description: 'ID продукта', format: 'uuid' })
  @IsUUID()
  productId: string;

  @ApiProperty({
    description: 'Файл изображения',
    type: 'string',
    format: 'binary',
  })
  file: any;
}
