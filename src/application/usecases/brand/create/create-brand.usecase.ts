import { Injectable } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';
import { Brand } from '../../../../domain';

@Injectable()
export class CreateBrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(name: string): Promise<Brand> {
    const brand = Brand.create({ name });
    await this.brandRepository.save(brand);
    return brand;
  }
}
