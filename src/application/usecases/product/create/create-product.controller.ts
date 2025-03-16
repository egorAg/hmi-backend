import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductUseCase } from './create-product.usecase';
import { CreateProductDto } from './create-product.dto';
import { ProductMapper } from '../../../../domain';

@ApiTags('Products')
@Controller('products')
export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  @ApiOperation({ summary: 'Создать новый продукт' })
  @ApiResponse({ status: 201, description: 'Продукт успешно создан' })
  @ApiBearerAuth()
  @Post()
  async create(@Body() dto: CreateProductDto) {
    const product = await this.createProductUseCase.execute(
      dto.name,
      dto.description,
      dto.price,
      dto.categoryId,
      dto.brandId,
    );
    return ProductMapper.toPersistence(product);
  }
}
