import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumEducationService } from './curiculum-education.service';

describe('CuriculumEducationService', () => {
  let service: CuriculumEducationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumEducationService],
    }).compile();

    service = module.get<CuriculumEducationService>(CuriculumEducationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
