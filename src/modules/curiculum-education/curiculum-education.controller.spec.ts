import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumEducationController } from './curiculum-education.controller';

describe('CuriculumEducationController', () => {
  let controller: CuriculumEducationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumEducationController],
    }).compile();

    controller = module.get<CuriculumEducationController>(CuriculumEducationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
