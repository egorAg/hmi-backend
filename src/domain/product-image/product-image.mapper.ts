import { ProductMapper } from '../product';
import { ProductImage } from './product-image.domain';
import { IProductImageUnmarshalled } from './product-image.interfaces';

export class ProductImageMapper {
  public static toDomain(raw: IProductImageUnmarshalled): ProductImage {
    return new ProductImage({
      id: raw.id,
      url: raw.url,
      productId: raw.productId,
      product: raw.product ? ProductMapper.toDomain(raw.product) : undefined,
    });
  }

  public static toPersistence(
    productImage: ProductImage,
  ): IProductImageUnmarshalled {
    return {
      id: productImage.id,
      url: productImage.url,
      productId: productImage.productId,
      product: productImage.product
        ? ProductMapper.toPersistence(productImage.product)
        : undefined,
    };
  }
}
