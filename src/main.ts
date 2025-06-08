import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './infrastructure';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '@infrastructure/guards/jwt.guard';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const jwtService = app.get(JwtService);
  app.useGlobalGuards(new JwtAuthGuard(jwtService));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  setupSwagger(app);

  app.enableCors();

  await app.listen(3400);
}

bootstrap();
