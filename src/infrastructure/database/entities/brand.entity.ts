import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { IBrandUnmarshalled } from '../../../domain';

@Entity('brands')
export class BrandEntity implements IBrandUnmarshalled {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.brand)
  products: ProductEntity[];
}
