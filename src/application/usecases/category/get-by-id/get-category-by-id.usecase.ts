import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';
import { Category, CategoryMapper } from '../../../../domain';

@Injectable()
export class GetCategoryByIdUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<Category> {
    const categoryEntity = await this.categoryRepository.findById(id);
    if (!categoryEntity) {
      throw new NotFoundException('Категория не найдена');
    }
    return CategoryMapper.toDomain(categoryEntity);
  }
}
