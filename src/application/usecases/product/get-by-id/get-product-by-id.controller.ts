import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetProductByIdUseCase } from './get-product-by-id.usecase';
import { GetProductByIdDto } from './get-product-by-id.dto';
import { ProductMapper } from '../../../../domain';

@ApiTags('Products')
@Controller('products')
export class GetProductByIdController {
  constructor(private readonly getProductByIdUseCase: GetProductByIdUseCase) {}

  @ApiOperation({ summary: 'Получить продукт по ID' })
  @ApiResponse({ status: 200, description: 'Продукт найден' })
  @ApiResponse({ status: 404, description: 'Продукт не найден' })
  @ApiBearerAuth()
  @Get(':id')
  async getById(@Param() params: GetProductByIdDto) {
    const product = await this.getProductByIdUseCase.execute(params.id);
    return ProductMapper.toPersistence(product);
  }
}
