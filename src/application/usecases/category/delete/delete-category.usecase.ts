import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../../../../infrastructure';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException('Категория не найдена');
    }

    await this.categoryRepository.deleteById(id);
  }
}
