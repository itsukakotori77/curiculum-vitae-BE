import { Test, TestingModule } from '@nestjs/testing';
import { AuthcontrollerController } from './authcontroller.controller';

describe('AuthcontrollerController', () => {
  let controller: AuthcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthcontrollerController],
    }).compile();

    controller = module.get<AuthcontrollerController>(AuthcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
