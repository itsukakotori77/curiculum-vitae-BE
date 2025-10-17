import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/core/jwt/jwt-auth-guard'
import { FileManagerService } from './file-manager.service'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { Response } from 'express'
import { IFile } from 'src/interface/file'
import { ApiBody, ApiConsumes, ApiProperty, ApiQuery } from '@nestjs/swagger'
import { FileInterceptor } from 'src/interceptors/file/file.interceptor'
import { FileDto, FileBodyDto } from 'src/shared/infrastructure/dto/file-dto'
import { FileManagerDeleteDto } from './file-manager-dto'

@Controller()
@UseGuards(JwtAuthGuard)
export class FileManagerController {
  constructor(private service: FileManagerService) {}

  @Get('getAll')
  async getAll(@Query() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.service.getAll(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menampilkan data',
        data: data,
        total_data: data.totalData,
        total_pege: data.totalPage,
        current_page: data.currentPage,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: 'internal server error',
        data: error.message,
      })
    }
  }

  @Get('getOne/:id')
  async getById(@Param('id') id: number, @Res() res: Response) {
    try {
      const data = await this.service.getById(id)
      if (data) {
        return res.status(HttpStatus.OK).json({
          code: '00',
          message: 'Data berhasil ditampilkan',
          data: data,
        })
      }

      return res.status(HttpStatus.BAD_REQUEST).json({
        code: '01',
        message: 'Data tidak ditemukan',
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: 'internal server error',
        data: error.message,
      })
    }
  }

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: FileDto })
  @UseInterceptors(new FileInterceptor())
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: FileBodyDto,
    @Res() res: Response,
  ) {
    try {
      if (!file) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          code: '02',
          message: 'File is required',
          data: null,
        })
      }

      const fileData: IFile = {
        file: file,
        folder: body?.folder || 'default',
        url: '',
        public_id: '',
      }

      const data = await this.service.store(fileData)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil menambahkan data',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: 'Internal server error',
        data: error.message,
      })
    }
  }

  @Delete('delete')
  async delete(@Body() body: FileManagerDeleteDto, @Res() res: Response) {
    try {
      const data = await this.service.delete(body)

      if (data) {
        return res.status(HttpStatus.OK).json({
          code: '00',
          message: data.message,
          data: data.data,
        })
      }

      return res.status(HttpStatus.NOT_FOUND).json({
        code: '01',
        message: data.message,
        data: data.data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: error.message,
      })
    }
  }

  @Get('getFilename')
  @ApiQuery({
    name: 'filename',
    required: true,
    type: String,
    description: 'Filename to search',
    example: 'q5px8cwhzraxewpusxcf.jpg',
  })
  async getByUsername(
    @Param() param: { filename: string },
    @Res() res: Response,
  ) {
    try {
      const data = await this.service.getByFilename(param)

      if (data) {
        return res.status(HttpStatus.OK).json({
          code: '00',
          message: 'data berhasil ditemukan',
          data: data,
        })
      }

      return res.status(HttpStatus.NOT_FOUND).json({
        code: '01',
        message: 'data tidak ditemukan',
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        message: error.message,
      })
    }
  }
}
