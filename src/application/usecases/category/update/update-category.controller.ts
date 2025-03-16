import { Body, Controller, Patch } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateCategoryUseCase } from './update-category.usecase';
import { UpdateCategoryDto } from './update-category.dto';
import { CategoryMapper } from '../../../../domain';

@ApiTags('Categories')
@Controller('categories')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryUseCase: UpdateCategoryUseCase) {}

  @ApiOperation({ summary: 'Обновить категорию' })
  @ApiResponse({ status: 200, description: 'Категория успешно обновлена' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  @ApiBearerAuth()
  @Patch()
  async update(@Body() dto: UpdateCategoryDto) {
    const category = await this.updateCategoryUseCase.execute(dto.id, dto.name);
    return CategoryMapper.toPersistence(category);
  }
}
