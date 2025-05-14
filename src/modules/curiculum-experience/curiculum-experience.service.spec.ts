import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumExperienceService } from './curiculum-experience.service';

describe('CuriculumExperienceService', () => {
  let service: CuriculumExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumExperienceService],
    }).compile();

    service = module.get<CuriculumExperienceService>(CuriculumExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
