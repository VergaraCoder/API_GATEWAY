import { NestFactory } from '@nestjs/core';
import { ServiceProductModule } from './service-product.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ServiceProductModule,
    {
      transport: Transport.TCP,
      options:{
        host:"localhost",
        port:4000
      }
    },
  );
  await app.listen();
}
bootstrap();
