import { Module } from '@nestjs/common';
import { DeleteCategoryController } from './delete-category.controller';
import { DeleteCategoryUseCase } from './delete-category.usecase';
import { CategoryRepository } from '../../../../infrastructure';

@Module({
  controllers: [DeleteCategoryController],
  providers: [DeleteCategoryUseCase, CategoryRepository],
  exports: [DeleteCategoryUseCase],
})
export class DeleteCategoryModule {}
