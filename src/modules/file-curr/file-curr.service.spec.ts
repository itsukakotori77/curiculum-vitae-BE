import { Test, TestingModule } from '@nestjs/testing';
import { FileCurrService } from './file-curr.service';

describe('FileCurrService', () => {
  let service: FileCurrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileCurrService],
    }).compile();

    service = module.get<FileCurrService>(FileCurrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
