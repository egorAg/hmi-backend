import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryUseCase } from './create-category.usecase';
import { CreateCategoryDto } from './create-category.dto';
import { CategoryMapper } from '../../../../domain';

@ApiTags('Categories')
@Controller('categories')
export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @ApiOperation({ summary: 'Создать новую категорию' })
  @ApiResponse({ status: 201, description: 'Категория успешно создана' })
  @Post()
  async create(@Body() dto: CreateCategoryDto) {
    const category = await this.createCategoryUseCase.execute(dto.name);
    return CategoryMapper.toPersistence(category);
  }
}
