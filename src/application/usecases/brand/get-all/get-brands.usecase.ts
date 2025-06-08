import { Injectable } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';
import { Brand, BrandMapper } from '@domain/brand';

@Injectable()
export class GetBrandsUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(
    page: number,
    limit: number,
  ): Promise<{ brands: Brand[]; totalCount: number }> {
    const { brands, totalCount } =
      await this.brandRepository.findWithPagination(page, limit);
    return { brands: brands.map(BrandMapper.toDomain), totalCount };
  }
}
