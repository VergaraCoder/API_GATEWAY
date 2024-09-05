import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceUserModule } from './service-user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ServiceUserModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  });
  await app.listen();
}
bootstrap();
