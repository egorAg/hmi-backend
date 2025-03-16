import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('product_images')
export class ProductImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => ProductEntity, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: ProductEntity;
}
