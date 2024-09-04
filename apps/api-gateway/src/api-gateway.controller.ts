import { Controller, Get, Inject } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService, @Inject("MATH") private client:ClientProxy) {}

  @Get()
  getHello() {
    const data= this.client.send("hola",{});
    return data;
  }
}
