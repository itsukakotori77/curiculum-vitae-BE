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
import { CuriculumVitaeService } from './curiculum-vitae.service'
import { PaginationPayloadDto } from 'src/global/dto/pagination-payload-dto'
import { Response } from 'express'
import { CuriculumVitaeDto } from './curiculum-vitae-dto'

@Controller('curiculum-vitae')
export class CuriculumVitaeController {
  constructor(private curVitaeService: CuriculumVitaeService) {}

  @Get('getAll')
  async getAll(@Query() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.curVitaeService.getAll(request)
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
      const data = await this.curVitaeService.getById(id)
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
  async create(@Body() request: CuriculumVitaeDto, @Res() res: Response) {
    try {
      const data = await this.curVitaeService.create(request)
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
  async update(@Body() request: CuriculumVitaeDto, @Res() res: Response) {
    try {
      const data = await this.curVitaeService.update(request)
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
      const data = await this.curVitaeService.delete(id)

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
