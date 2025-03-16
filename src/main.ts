import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './infrastructure';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '@infrastructure/guards/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const jwtService = app.get(JwtService);
  app.useGlobalGuards(new JwtAuthGuard(jwtService));

  setupSwagger(app);

  app.enableCors();

  await app.listen(3000);
}

bootstrap();
