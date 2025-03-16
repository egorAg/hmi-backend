import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';
import { Category, CategoryMapper } from '../../../../domain';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(name: string): Promise<Category> {
    const category = Category.create({ name }); // Создаём доменную модель
    await this.categoryRepository.save(CategoryMapper.toPersistence(category)); // Сохраняем в БД
    return category;
  }
}
