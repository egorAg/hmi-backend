import { IUserUnmarshalled } from './user.interfaces';
import { User } from './user.domain';

export class UserMapper {
  static toDomain(raw: IUserUnmarshalled): User {
    return new User({ ...raw });
  }

  static toPersistence(user: User): IUserUnmarshalled {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
    };
  }
}
