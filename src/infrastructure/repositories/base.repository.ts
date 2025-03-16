import {
  Repository,
  DataSource,
  EntityTarget,
  FindOptionsWhere,
} from 'typeorm';

/**
 * Базовый репозиторий для всех сущностей.
 * T — это любая сущность, у которой обязательно есть `id: string`.
 */
export class BaseRepository<T extends { id: string }> extends Repository<T> {
  constructor(entity: EntityTarget<T>, dataSource: DataSource) {
    super(entity, dataSource.createEntityManager());
  }

  async findAll(): Promise<T[]> {
    return this.find();
  }

  async findById(id: string): Promise<T | null> {
    return this.findOne({ where: { id } as FindOptionsWhere<T> });
  }

  async deleteById(id: string): Promise<void> {
    await this.delete({ id } as FindOptionsWhere<T>);
  }
}
