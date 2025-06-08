import { randomUUID } from 'crypto';
import { Brand } from '../brand';
import { Category } from '../category';
import { IProductProps } from './product.interfaces';
import { ProductImage } from '@domain/product-image';

export class Product {
  constructor(private readonly props: IProductProps) {}

  public static create(props: IProductProps): Product {
    return new Product({ id: randomUUID(), ...props });
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get description(): string | undefined {
    return this.props.description;
  }

  public get price(): number {
    return this.props.price;
  }

  public get category(): Category | undefined {
    return this.props.category;
  }

  public get categoryId(): string | undefined {
    return this.props.categoryId;
  }

  public get brand(): Brand | undefined {
    return this.props.brand;
  }

  public get brandId(): string | undefined {
    return this.props.brandId;
  }

  public get images(): ProductImage[] {
    return this.props.images ? this.props.images : [];
  }
}
