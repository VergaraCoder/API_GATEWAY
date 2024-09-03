import { NestFactory } from '@nestjs/core';
import { TaksProductModule } from './taks-product.module';

async function bootstrap() {
  const app = await NestFactory.create(TaksProductModule);
  await app.listen(3000);
}
bootstrap();
