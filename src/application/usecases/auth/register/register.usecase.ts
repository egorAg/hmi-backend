import { Injectable, ConflictException } from '@nestjs/common';
import { UserRepository } from '@infrastructure/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { User } from '@domain/user';

@Injectable()
export class RegisterUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('Пользователь уже существует');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({ email, password: hashedPassword });

    await this.userRepository.createNewUser(user);

    user.password = undefined;

    return user['props'];
  }
}
