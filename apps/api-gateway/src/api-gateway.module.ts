import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH', transport: Transport.TCP,
    options:{
      host:"localhost",
      port:4000
    } },

    { name: 'USER', transport: Transport.TCP,
    options:{
      host:"localhost",
      port:4001
    } },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
