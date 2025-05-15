import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumVitaeService } from './curiculum-vitae.service';

describe('CuriculumVitaeService', () => {
  let service: CuriculumVitaeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumVitaeService],
    }).compile();

    service = module.get<CuriculumVitaeService>(CuriculumVitaeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
