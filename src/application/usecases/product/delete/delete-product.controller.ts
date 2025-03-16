import { Controller, Delete, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteProductUseCase } from './delete-product.usecase';
import { DeleteProductDto } from './delete-product.dto';

@ApiTags('Products')
@Controller('products')
export class DeleteProductController {
  constructor(private readonly deleteProductUseCase: DeleteProductUseCase) {}

  @ApiOperation({ summary: 'Удалить продукт' })
  @ApiResponse({ status: 200, description: 'Продукт удалён' })
  @ApiResponse({ status: 404, description: 'Продукт не найден' })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param() params: DeleteProductDto) {
    await this.deleteProductUseCase.execute(params.id);
    return { message: 'Продукт удалён' };
  }
}
