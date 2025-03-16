import { Body, Controller, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateProductUseCase } from './update-product.usecase';
import { UpdateProductDto } from './update-product.dto';
import { ProductMapper } from '../../../../domain';

@ApiTags('Products')
@Controller('products')
export class UpdateProductController {
  constructor(private readonly updateProductUseCase: UpdateProductUseCase) {}

  @ApiOperation({ summary: 'Обновить продукт' })
  @ApiResponse({ status: 200, description: 'Продукт успешно обновлён' })
  @ApiResponse({ status: 404, description: 'Продукт не найден' })
  @Patch()
  async update(@Body() dto: UpdateProductDto) {
    const product = await this.updateProductUseCase.execute(dto.id, dto);
    return ProductMapper.toPersistence(product);
  }
}
