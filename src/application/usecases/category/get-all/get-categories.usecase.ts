import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';
import { Category, CategoryMapper } from '@domain/category';

@Injectable()
export class GetCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    page: number,
    limit: number,
  ): Promise<{ categories: Category[]; totalCount: number }> {
    const { categories, totalCount } =
      await this.categoryRepository.findWithPagination(page, limit);
    return { categories: categories.map(CategoryMapper.toDomain), totalCount };
  }
}
