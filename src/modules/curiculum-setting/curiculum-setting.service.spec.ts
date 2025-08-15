import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumSettingService } from './curiculum-setting.service';

describe('CuriculumSettingService', () => {
  let service: CuriculumSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuriculumSettingService],
    }).compile();

    service = module.get<CuriculumSettingService>(CuriculumSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
