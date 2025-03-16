import { Controller, Delete, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteBrandUseCase } from './delete-brand.usecase';
import { DeleteBrandDto } from './delete-brand.dto';

@ApiTags('Brands')
@Controller('brands')
export class DeleteBrandController {
  constructor(private readonly deleteBrandUseCase: DeleteBrandUseCase) {}

  @ApiOperation({ summary: 'Удалить бренд' })
  @ApiResponse({ status: 200, description: 'Бренд удалён' })
  @ApiResponse({ status: 404, description: 'Бренд не найден' })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param() params: DeleteBrandDto) {
    await this.deleteBrandUseCase.execute(params.id);
    return { message: 'Бренд удалён' };
  }
}
