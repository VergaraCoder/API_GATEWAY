import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService, @Inject("USER_SERVICE") private client:ClientProxy) {}

  @Get()
  getHello() {
    const data= this.client.send("hola",{});
    return data;
  }

  @Post()
  createUser(@Body() dataUser:any){
    const data=this.client.send("creandoUser",dataUser);
    return data;
  }
}
