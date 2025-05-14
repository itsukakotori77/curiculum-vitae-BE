import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumExperienceController } from './curiculum-experience.controller';

describe('CuriculumExperienceController', () => {
  let controller: CuriculumExperienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumExperienceController],
    }).compile();

    controller = module.get<CuriculumExperienceController>(CuriculumExperienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
