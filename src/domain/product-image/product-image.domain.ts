import { randomUUID } from 'crypto';
import { Product } from '../product';
import { IProductImageProps } from './product-image.interfaces';

export class ProductImage {
  constructor(private readonly props: IProductImageProps) {
    if (!props.url || props.url.trim() === '') {
      throw new Error('URL изображения обязателен.');
    }

    if (!props.productId && !props.product) {
      throw new Error('Изображение должно быть связано с товаром.');
    }
  }

  public static create(props: IProductImageProps): ProductImage {
    return new ProductImage({ id: randomUUID(), ...props });
  }

  public get id(): string {
    return this.props.id;
  }

  public get url(): string {
    return this.props.url;
  }

  public get product(): Product | undefined {
    return this.props.product;
  }

  public get productId(): string | undefined {
    return this.props.productId;
  }
}
