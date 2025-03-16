import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Length,
  IsUUID,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15 Pro', description: 'Название продукта' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @ApiProperty({
    example: 'Флагманский смартфон Apple',
    description: 'Описание',
  })
  @IsString()
  description?: string;

  @ApiProperty({ example: 999.99, description: 'Цена' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID категории',
  })
  @IsUUID()
  categoryId: string;

  @ApiProperty({
    example: '660e8400-e29b-41d4-a716-446655440000',
    description: 'ID бренда',
  })
  @IsUUID()
  brandId: string;
}
