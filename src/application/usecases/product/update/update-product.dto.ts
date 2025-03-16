import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
  IsUUID,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: '770e8400-e29b-41d4-a716-446655440000',
    description: 'ID продукта',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    example: 'iPhone 15 Pro Max',
    description: 'Название продукта',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  name?: string;

  @ApiProperty({
    example: 'Флагманский смартфон Apple с увеличенным экраном',
    description: 'Описание',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1099.99, description: 'Цена', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'ID категории',
    required: false,
  })
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiProperty({
    example: '660e8400-e29b-41d4-a716-446655440000',
    description: 'ID бренда',
    required: false,
  })
  @IsOptional()
  @IsUUID()
  brandId?: string;
}
