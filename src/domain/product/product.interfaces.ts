import { IProductImageUnmarshalled, ProductImage } from '@domain/product-image';
import { Brand, IBrandUnmarshalled } from '../brand';
import { Category, ICategoryUnmarshalled } from '../category';

export interface IProductProps {
  id?: string;
  name: string;
  description?: string;
  price: number;
  categoryId?: string;
  category?: Category;
  brandId?: string;
  brand?: Brand;
  images?: ProductImage[];
}

export interface IProductUnmarshalled {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId?: string;
  category?: ICategoryUnmarshalled;
  brandId?: string;
  brand?: IBrandUnmarshalled;
  images?: IProductImageUnmarshalled[];
}
