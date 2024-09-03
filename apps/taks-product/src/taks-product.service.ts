import { Injectable } from '@nestjs/common';

@Injectable()
export class TaksProductService {
  getHello(): string {
    return 'Hello World!';
  }
}
