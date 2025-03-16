import { Module } from '@nestjs/common';
import { GetCategoryByIdController } from './get-category-by-id.controller';
import { GetCategoryByIdUseCase } from './get-category-by-id.usecase';
import { CategoryRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetCategoryByIdController],
  providers: [GetCategoryByIdUseCase, CategoryRepository],
  exports: [GetCategoryByIdUseCase],
})
export class GetCategoryByIdModule {}
