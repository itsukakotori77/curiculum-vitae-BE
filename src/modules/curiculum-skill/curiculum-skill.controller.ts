import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common'
import { CuriculumSkillService } from './curiculum-skill.service'
import { PaginationPayloadDto } from 'src/global/dto/pagination-payload-dto'
import { Response } from 'express'
import { CuriculumSkillDto } from './curiculum-skill-dto'

@Controller('curiculum-skill')
export class CuriculumSkillController {
  constructor(private curSkillService: CuriculumSkillService) {}

  @Get('getAll')
  async getAll(@Query() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.curSkillService.getAll(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menampilkan data',
        data: data.data,
        total_data: data.totalData,
        total_page: data.totalPage,
        current_page: data.currentPage,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message,
      })
    }
  }

  @Get('getOne/:id')
  async getById(@Param('id') id: number, @Res() res: Response) {
    try {
      const data = await this.curSkillService.getById(id)
      if (data) {
        return res.status(HttpStatus.OK).json({
          code: '00',
          message: 'Berhasil menampilkan data',
          data: data,
        })
      }

      return res.status(HttpStatus.NOT_FOUND).json({
        code: '01',
        message: 'Data tidak ditemukan',
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message,
      })
    }
  }

  @Post('create')
  async create(@Body() request: CuriculumSkillDto, @Res() res: Response) {
    try {
      const data = await this.curSkillService.create(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menambahkan data',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message,
      })
    }
  }

  @Put('update')
  async update(@Body() request: CuriculumSkillDto, @Res() res: Response) {
    try {
      const data = await this.curSkillService.update(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil mengubah data',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message,
      })
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      const data = await this.curSkillService.delete(id)

      if (data) {
        return res.status(HttpStatus.OK).json({
          code: '00',
          message: 'Berhasil menghapus data',
        })
      }

      return res.status(HttpStatus.NOT_FOUND).json({
        code: '01',
        message: 'Data tidak ditemukan',
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: error.message,
      })
    }
  }
}
