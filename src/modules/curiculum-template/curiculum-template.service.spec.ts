import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumTemplateService } from './curiculum-template.service';

describe('CuriculumTemplateService', () => {
  let service: CuriculumTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumTemplateService],
    }).compile();

    service = module.get<CuriculumTemplateService>(CuriculumTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
