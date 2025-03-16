import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../../infrastructure';
import { Product, ProductMapper } from '../../../../domain';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    name: string,
    description: string,
    price: number,
    categoryId: string,
    brandId: string,
  ): Promise<Product> {
    const product = Product.create({
      name,
      description,
      price,
      categoryId,
      brandId,
    });

    await this.productRepository.save(ProductMapper.toPersistence(product));

    const createdProduct = await this.productRepository.findById(product.id);

    if (!createdProduct) {
      throw new HttpException('Что-то пошло не так', HttpStatus.I_AM_A_TEAPOT);
    }

    return ProductMapper.toDomain(createdProduct);
  }
}
