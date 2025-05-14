import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumSkillService } from './curiculum-skill.service';

describe('CuriculumSkillService', () => {
  let service: CuriculumSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumSkillService],
    }).compile();

    service = module.get<CuriculumSkillService>(CuriculumSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
