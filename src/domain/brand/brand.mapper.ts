import { Brand } from './brand.domain';
import { IBrandUnmarshalled } from './brand.interfaces';

export class BrandMapper {
  public static toDomain(brand: IBrandUnmarshalled): Brand {
    return new Brand({
      ...brand,
    });
  }

  public static toPersistence(brand: Brand): IBrandUnmarshalled {
    const { id, name } = brand['props'];
    return {
      id,
      name,
    };
  }
}
