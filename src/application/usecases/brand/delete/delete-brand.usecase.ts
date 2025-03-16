import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from '../../../../infrastructure';

@Injectable()
export class DeleteBrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}

  async execute(id: string): Promise<void> {
    const brand = await this.brandRepository.findById(id);
    if (!brand) {
      throw new NotFoundException('Бренд не найден');
    }

    await this.brandRepository.deleteById(id);
  }
}
