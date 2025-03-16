import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { BrandEntity } from './brand.entity';
import { ProductImageEntity } from './product-image.entity';
import { IProductUnmarshalled } from '../../../domain';

@Entity('products')
export class ProductEntity implements IProductUnmarshalled {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'uuid', nullable: true })
  categoryId?: string;

  @Column({ type: 'uuid', nullable: true })
  brandId?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    eager: true,
    nullable: false,
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;

  @ManyToOne(() => BrandEntity, (brand) => brand.products, {
    eager: true,
    nullable: false,
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'brandId' })
  brand: BrandEntity;

  @OneToMany(() => ProductImageEntity, (image) => image.product, {
    cascade: true,
  })
  images: ProductImageEntity[];
}
