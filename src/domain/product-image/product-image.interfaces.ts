import { Product, IProductUnmarshalled } from '../product';

export interface IProductImageProps {
  id?: string;
  url: string;
  productId?: string;
  product?: Product;
}

export interface IProductImageUnmarshalled {
  id: string;
  url: string;
  productId?: string;
  product?: IProductUnmarshalled;
}
