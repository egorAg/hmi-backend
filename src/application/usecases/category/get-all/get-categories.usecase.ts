import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';
import { Category, CategoryMapper } from '../../../../domain';

@Injectable()
export class GetCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(page: number, limit: number): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    return categories.map(CategoryMapper.toDomain);
  }
}
