import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService, @Inject("MATH") private client:ClientProxy) {}

  @Post()
  getHello(@Body() data2:any) {
    const data= this.client.send("hola",data2);
    return data;
  }
}
