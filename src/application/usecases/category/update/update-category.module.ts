import { Module } from '@nestjs/common';
import { UpdateCategoryController } from './update-category.controller';
import { UpdateCategoryUseCase } from './update-category.usecase';
import { CategoryRepository } from '../../../../infrastructure';

@Module({
  controllers: [UpdateCategoryController],
  providers: [UpdateCategoryUseCase, CategoryRepository],
  exports: [UpdateCategoryUseCase],
})
export class UpdateCategoryModule {}
