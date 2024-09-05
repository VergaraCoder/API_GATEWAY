import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
