import { Category } from './category.domain';
import { ICategoryUnmarshalled } from './category.interfaces';

export class CategoryMapper {
  public static toDomain(category: ICategoryUnmarshalled): Category {
    return new Category({
      ...category,
    });
  }

  public static toPersistence(category: Category): ICategoryUnmarshalled {
    const { id, name } = category['props'];
    return {
      id,
      name,
    };
  }
}
