import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumSkillController } from './curiculum-skill.controller';

describe('CuriculumSkillController', () => {
  let controller: CuriculumSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumSkillController],
    }).compile();

    controller = module.get<CuriculumSkillController>(CuriculumSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
