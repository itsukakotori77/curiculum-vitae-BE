import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Param,
  Get,
  Put,
} from '@nestjs/common'
import { UserService } from './user.service'
import { PaginationPayloadDto } from 'src/global/dto/pagination-payload-dto'
import { Response } from 'express'
import { UserDto } from './user-dto'

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}

  @Post('get-all')
  async getAll(@Body() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.user.getAll(request)
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
      const data = await this.user.getById(id)

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
  async create(@Body() request: UserDto, @Res() res: Response) {
    try {
      const data = await this.user.create(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menambahkan data',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: error.message,
      })
    }
  }

  @Put('update')
  async update(@Body() request: UserDto, @Res() res: Response) {
    try {
      const data = await this.user.create(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menambahkan data',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: error.message,
      })
    }
  }

}
