import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetCategoryByIdUseCase } from './get-category-by-id.usecase';
import { GetCategoryByIdDto } from './get-category-by-id.dto';
import { CategoryMapper } from '../../../../domain';

@ApiTags('Categories')
@Controller('categories')
export class GetCategoryByIdController {
  constructor(
    private readonly getCategoryByIdUseCase: GetCategoryByIdUseCase,
  ) {}

  @ApiOperation({ summary: 'Получить категорию по ID' })
  @ApiResponse({ status: 200, description: 'Категория найдена' })
  @ApiResponse({ status: 404, description: 'Категория не найдена' })
  @ApiBearerAuth()
  @Get(':id')
  async getById(@Param() params: GetCategoryByIdDto) {
    const category = await this.getCategoryByIdUseCase.execute(params.id);
    return CategoryMapper.toPersistence(category);
  }
}
