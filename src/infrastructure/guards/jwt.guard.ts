import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

const PUBLIC_ROUTES = ['/auth/register', '/auth/login'];

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;
    const path = request.url;

    if (PUBLIC_ROUTES.includes(path)) {
      return true;
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Отсутствует токен');
    }

    const token = authHeader.split(' ')[1];

    try {
      request.user = this.jwtService.verify(token);
      return true;
    } catch (err) {
      throw new UnauthorizedException('Неверный токен');
    }
  }
}
