import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUserUnmarshalled } from '../../../domain';

@Entity('users')
export class UserEntity implements IUserUnmarshalled {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
