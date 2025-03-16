import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteCategoryUseCase } from './delete-category.usecase';
import { DeleteCategoryDto } from './delete-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryUseCase: DeleteCategoryUseCase) {}

  @ApiOperation({ summary: 'Удалить категорию' })
  @ApiResponse({ status: 200, description: 'Категория удалена' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  @Delete(':id')
  async delete(@Param() params: DeleteCategoryDto) {
    await this.deleteCategoryUseCase.execute(params.id);
    return { message: 'Категория удалена' };
  }
}
