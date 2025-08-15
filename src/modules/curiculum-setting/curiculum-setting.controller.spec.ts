import { Test, TestingModule } from '@nestjs/testing';
import { CuriculumSettingController } from './curiculum-setting.controller';

describe('CuriculumSettingController', () => {
  let controller: CuriculumSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuriculumSettingController],
    }).compile();

    controller = module.get<CuriculumSettingController>(CuriculumSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
