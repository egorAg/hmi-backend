import { Module } from '@nestjs/common';
import { GetCategoriesController } from './get-categories.controller';
import { GetCategoriesUseCase } from './get-categories.usecase';
import { CategoryRepository } from '../../../../infrastructure';

@Module({
  controllers: [GetCategoriesController],
  providers: [GetCategoriesUseCase, CategoryRepository],
  exports: [GetCategoriesUseCase],
})
export class GetCategoriesModule {}
