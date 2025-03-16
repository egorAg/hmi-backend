import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';
import { Brand, BrandMapper } from '../../../../domain';

@Injectable()
export class UpdateBrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(id: string, name: string): Promise<Brand> {
    const brandEntity = await this.brandRepository.findById(id);
    if (!brandEntity) {
      throw new NotFoundException('Бренд не найден');
    }

    // Создаём доменную модель с обновлёнными данными
    const updatedBrand = BrandMapper.toDomain({ ...brandEntity, name });

    await this.brandRepository.save(BrandMapper.toPersistence(updatedBrand));

    return updatedBrand;
  }
}
