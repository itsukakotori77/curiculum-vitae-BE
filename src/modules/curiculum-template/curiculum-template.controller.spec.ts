import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumTemplateController } from './curiculum-template.controller';

describe('CuriculumTemplateController', () => {
  let controller: CuriculumTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumTemplateController],
    }).compile();

    controller = module.get<CuriculumTemplateController>(CuriculumTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
