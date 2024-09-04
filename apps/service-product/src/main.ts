import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ServiceProductModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  });
  await app.listen();
}
bootstrap();
