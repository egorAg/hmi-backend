import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetProductsUseCase } from './get-products.usecase';
import { GetProductsDto } from './get-products.dto';
import { ProductMapper } from '../../../../domain';

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
    const products = await this.getProductsUseCase.execute(
      query.page,
      query.limit,
      query.categoryId,
      query.brandId,
    );
    return products.map(ProductMapper.toPersistence);
  }
}
