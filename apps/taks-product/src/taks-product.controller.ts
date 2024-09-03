import { Controller, Get } from '@nestjs/common';
import { TaksProductService } from './taks-product.service';

@Controller()
export class TaksProductController {
  constructor(private readonly taksProductService: TaksProductService) {}

  @Get()
  getHello(): string {
    return this.taksProductService.getHello();
  }
}
