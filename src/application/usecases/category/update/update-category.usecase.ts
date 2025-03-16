import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';
import { Category, CategoryMapper } from '../../../../domain';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string, name: string): Promise<Category> {
    const categoryEntity = await this.categoryRepository.findById(id);
    if (!categoryEntity) {
      throw new NotFoundException('Категория не найдена');
    }

    const updatedCategory = CategoryMapper.toDomain({
      ...categoryEntity,
      name,
    });

    await this.categoryRepository.save(
      CategoryMapper.toPersistence(updatedCategory),
    );

    return updatedCategory;
  }
}
