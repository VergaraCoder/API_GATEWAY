import { Test, TestingModule } from '@nestjs/testing';
import { TaksProductController } from './taks-product.controller';
import { TaksProductService } from './taks-product.service';

describe('TaksProductController', () => {
  let taksProductController: TaksProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaksProductController],
      providers: [TaksProductService],
    }).compile();

    taksProductController = app.get<TaksProductController>(TaksProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taksProductController.getHello()).toBe('Hello World!');
    });
  });
});
