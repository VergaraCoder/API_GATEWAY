import { Module } from '@nestjs/common';
import { ServiceProductController } from './service-product.controller';
import { ServiceProductService } from './service-product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [ServiceProductController],
  providers: [ServiceProductService],
})
export class ServiceProductModule {}
