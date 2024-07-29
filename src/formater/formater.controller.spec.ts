import { Test, TestingModule } from '@nestjs/testing';
import { FormaterController } from './formater.controller';
import { FormaterService } from './formater.service';

describe('FormaterController', () => {
  let controller: FormaterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormaterController],
      providers: [FormaterService],
    }).compile();

    controller = module.get<FormaterController>(FormaterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
