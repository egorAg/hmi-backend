import { BrandMapper } from '../brand';
import { CategoryMapper } from '../category';
import { Product } from './product.domain';
import { IProductUnmarshalled } from './product.interfaces';

export class ProductMapper {
  public static toDomain(raw: IProductUnmarshalled): Product {
    return new Product({
      id: raw.id,
      name: raw.name,
      description: raw.description,
      price: raw.price,
      categoryId: raw.categoryId,
      category: raw.category
        ? CategoryMapper.toDomain(raw.category)
        : undefined,
      brandId: raw.brandId,
      brand: raw.brand ? BrandMapper.toDomain(raw.brand) : undefined,
    });
  }

  public static toPersistence(product: Product): IProductUnmarshalled {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      categoryId: product.categoryId,
      category: product.category
        ? CategoryMapper.toPersistence(product.category)
        : undefined,
      brandId: product.brandId,
      brand: product.brand
        ? BrandMapper.toPersistence(product.brand)
        : undefined,
    };
  }
}
