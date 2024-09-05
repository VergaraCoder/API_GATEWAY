import { Controller, Get } from '@nestjs/common';
import { ServiceProductService } from './service-product.service';
import { log } from 'console';

@Controller()
export class ServiceProductController {
  constructor(private readonly serviceProductService: ServiceProductService) {}

  @Get("hola")
  getHello(): string {
    console.log("entramos ");
    
    return "hola estamos en el servicio";
  }
}
