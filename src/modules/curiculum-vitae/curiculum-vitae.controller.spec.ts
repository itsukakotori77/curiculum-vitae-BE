import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumVitaeController } from './curiculum-vitae.controller';

describe('CuriculumVitaeController', () => {
  let controller: CuriculumVitaeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumVitaeController],
    }).compile();

    controller = module.get<CuriculumVitaeController>(CuriculumVitaeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
