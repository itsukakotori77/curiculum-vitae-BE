import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Param,
  Get,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common'
import { CuriculumEducationService } from './curiculum-education.service'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { Response } from 'express'
import { CuriculumEducationDto } from './curiculum-education-dto'
import { JwtAuthGuard } from 'src/core/jwt/jwt-auth-guard'

@Controller('curiculum-education')
@UseGuards(JwtAuthGuard)
export class CuriculumEducationController {
  constructor(private educationService: CuriculumEducationService) {}

  @Get('getAll')
  async getAll(@Query() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.educationService.getAll(request)
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
      const data = await this.educationService.getById(id)
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
  async create(@Body() request: CuriculumEducationDto, @Res() res: Response) {
    try {
      const data = await this.educationService.create(request)
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
  async update(@Body() request: CuriculumEducationDto, @Res() res: Response) {
    try {
      const data = await this.educationService.update(request)
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
  async delete(@Param() id: number, @Res() res: Response) {
    try {
      const data = await this.educationService.delete(id)

      if(data) {
         return res.status(HttpStatus.OK).json({
           code: '00',
           success: true,
           message: 'Berhasil menghapus data',
         })
      }
      
      return res.status(HttpStatus.NOT_FOUND).json({
         code: '01',
         success: false,
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
