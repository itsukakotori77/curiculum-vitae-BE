import { Test, TestingModule } from '@nestjs/testing';
import { ImagetKitService } from './imaget-kit.service';

describe('ImagetKitService', () => {
  let service: ImagetKitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagetKitService],
    }).compile();

    service = module.get<ImagetKitService>(ImagetKitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
