import { Module } from '@nestjs/common';
import { CreateCategoryController } from './create-category.controller';
import { CreateCategoryUseCase } from './create-category.usecase';
import { CategoryRepository } from '../../../../infrastructure';

@Module({
  controllers: [CreateCategoryController],
  providers: [CreateCategoryUseCase, CategoryRepository],
  exports: [CreateCategoryUseCase],
})
export class CreateCategoryModule {}
