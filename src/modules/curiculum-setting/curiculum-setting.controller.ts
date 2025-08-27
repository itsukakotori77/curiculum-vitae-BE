import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CuriculumSettingService } from './curiculum-setting.service';
import { CuriculumSettingDto } from './curiculum-setting-dto';
import { Response } from 'express';

@Controller()
export class CuriculumSettingController {
  constructor(private curVitaeSetting: CuriculumSettingService){}

  @Post('create')
  async create(@Body() request: CuriculumSettingDto, @Res() res: Response){
    try {
      const data = await this.curVitaeSetting.create(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menambahkan setting',
        data: data
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message
      })
    }
  }

  
}
