import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsOptional, IsUUID } from 'class-validator';

export class GetProductsDto {
  @ApiProperty({ example: 1, description: 'Номер страницы', required: false })
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    example: 10,
    description: 'Количество записей на странице',
    required: false,
  })
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

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
