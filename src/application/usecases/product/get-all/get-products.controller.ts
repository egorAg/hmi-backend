import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetProductsUseCase } from '@application/usecases';
import { GetProductsDto } from './get-products.dto';
import { ProductMapper } from '@domain/product';

@ApiTags('Products')
@Controller('products')
export class GetProductsController {
  constructor(private readonly getProductsUseCase: GetProductsUseCase) {}

  @ApiOperation({
    summary: 'Получить список продуктов с пагинацией и фильтрацией',
  })
  @ApiResponse({ status: 200, description: 'Список продуктов' })
  @ApiBearerAuth()
  @Get()
  async getAll(@Query() query: GetProductsDto) {
    const { products, totalCount } = await this.getProductsUseCase.execute(
      query.page,
      query.limit,
      query.categoryId,
      query.brandId,
    );
    return { products: products.map(ProductMapper.toPersistence), totalCount };
  }
}
