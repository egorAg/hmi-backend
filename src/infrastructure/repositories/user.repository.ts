import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BaseRepository } from './base.repository';
import { UserEntity } from '@infrastructure/database';
import { User, UserMapper } from '@domain/user';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.findOne({ where: { email } });
  }

  async createNewUser(user: User) {
    await this.save(UserMapper.toPersistence(user));
  }
}
