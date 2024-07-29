import { Test, TestingModule } from '@nestjs/testing';
import { FormaterService } from './formater.service';

describe('FormaterService', () => {
  let service: FormaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormaterService],
    }).compile();

    service = module.get<FormaterService>(FormaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
