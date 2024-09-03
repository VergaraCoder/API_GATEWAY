import { Module } from '@nestjs/common';
import { TaksProductController } from './taks-product.controller';
import { TaksProductService } from './taks-product.service';

@Module({
  imports: [],
  controllers: [TaksProductController],
  providers: [TaksProductService],
})
export class TaksProductModule {}
