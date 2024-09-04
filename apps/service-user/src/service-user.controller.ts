import { Controller, Get, Inject } from '@nestjs/common';
import { ServiceUserService } from './service-user.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ServiceUserController {
  constructor(private readonly serviceUserService: ServiceUserService , @Inject("PRODUCT_SERVICE") private clientProduct:ClientProxy) {}

  @MessagePattern("creandoUser")
  getHello(@Payload() dataRequest:any) {
    console.log("entramos a crear un usuario ");
    console.log(dataRequest);
    const data=this.clientProduct.send("getProduct",{});
    return data;
  }
}
