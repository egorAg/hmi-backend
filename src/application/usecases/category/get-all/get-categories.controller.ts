import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCategoriesUseCase } from './get-categories.usecase';
import { GetCategoriesDto } from './get-categories.dto';
import { CategoryMapper } from '../../../../domain';

@ApiTags('Categories')
@Controller('categories')
export class GetCategoriesController {
  constructor(private readonly getCategoriesUseCase: GetCategoriesUseCase) {}

  @ApiOperation({ summary: 'Получить список категорий с пагинацией' })
  @ApiResponse({ status: 200, description: 'Список категорий' })
  @Get()
  async getAll(@Query() query: GetCategoriesDto) {
    const categories = await this.getCategoriesUseCase.execute(
      query.page,
      query.limit,
    );
    return categories.map(CategoryMapper.toPersistence);
  }
}
