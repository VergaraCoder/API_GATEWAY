import { Module } from '@nestjs/common';
import { ServiceUserController } from './service-user.controller';
import { ServiceUserService } from './service-user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        }
      },
    ])
  ],
  controllers: [ServiceUserController],
  providers: [ServiceUserService],
})
export class ServiceUserModule {}
