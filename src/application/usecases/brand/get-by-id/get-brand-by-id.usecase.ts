import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';
import { Brand, BrandMapper } from '../../../../domain';

@Injectable()
export class GetBrandByIdUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(id: string): Promise<Brand> {
    const brandEntity = await this.brandRepository.findById(id);
    if (!brandEntity) {
      throw new NotFoundException('Бренд не найден');
    }
    return BrandMapper.toDomain(brandEntity);
  }
}
