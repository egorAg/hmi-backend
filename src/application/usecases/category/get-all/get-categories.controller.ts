import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetCategoriesUseCase } from '@application/usecases';
import { GetCategoriesDto } from './get-categories.dto';
import { CategoryMapper } from '@domain/category';

@ApiTags('Categories')
@Controller('categories')
export class GetCategoriesController {
  constructor(private readonly getCategoriesUseCase: GetCategoriesUseCase) {}

  @ApiOperation({ summary: 'Получить список категорий с пагинацией' })
  @ApiResponse({ status: 200, description: 'Список категорий' })
  @ApiBearerAuth()
  @Get()
  async getAll(@Query() query: GetCategoriesDto) {
    const { categories, totalCount } = await this.getCategoriesUseCase.execute(
      query.page,
      query.limit,
    );
    return {
      categories: categories.map(CategoryMapper.toPersistence),
      totalCount,
    };
  }
}
