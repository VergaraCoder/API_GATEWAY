import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('hola')
  create() {
    console.log("entramos al servicio");
    
    return "hola";
  }

  @MessagePattern('getProduct')
  findAll() {
    return this.productService.findAll();
  }

  @MessagePattern('findOneProduct')
  findOne(@Payload() id: number) {
    return this.productService.findOne(id);
  }

  @MessagePattern('updateProduct')
  update(@Payload() updateProductDto: UpdateProductDto) {
    return this.productService.update(updateProductDto.id, updateProductDto);
  }

  @MessagePattern('removeProduct')
  remove(@Payload() id: number) {
    return this.productService.remove(id);
  }
}
