import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';

async function bootstrap() {
  const app = await NestFactory.create(ServiceProductModule);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
