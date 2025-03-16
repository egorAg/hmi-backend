import { Injectable } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';
import { Brand, BrandMapper } from '../../../../domain';

@Injectable()
export class GetBrandsUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(page: number, limit: number): Promise<Brand[]> {
    const brands = await this.brandRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    return brands.map(BrandMapper.toDomain);
  }
}
