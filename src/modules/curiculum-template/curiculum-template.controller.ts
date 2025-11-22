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
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { CuriculumTemplateService } from './curiculum-template.service'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { Response } from 'express'
import { CuriculumTemplateDto } from './curiculum-template-dto'
import { JwtAuthGuard } from 'src/core/jwt/jwt-auth-guard'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { IPayloadTemplate } from 'src/interface/cvitae'

@Controller()
@UseGuards(JwtAuthGuard)
export class CuriculumTemplateController {
  constructor(private curTemplateService: CuriculumTemplateService) {}

  @Get('getAll')
  async getAll(@Query() request: PaginationPayloadDto, @Res() res: Response) {
    try {
      const data = await this.curTemplateService.getAll(request)
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
      const data = await this.curTemplateService.getById(id)
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
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CuriculumTemplateDto })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'file_photo', maxCount: 1 },
      { name: 'file_nophoto', maxCount: 1 },
    ]),
  )
  async create(
    @UploadedFiles() files: IPayloadTemplate,
    @Body() request: CuriculumTemplateDto,
    @Res() res: Response,
  ) {
    try {
      const filePhoto = files.file_photo?.[0]
      const fileNoPhoto = files.file_nophoto?.[0]

      // if (!filePhoto || !fileNoPhoto) {
      //   return res.status(HttpStatus.BAD_REQUEST).json({
      //     code: '02',
      //     message: 'Both file_photo and file_nophoto are required',
      //     data: null,
      //   })
      // }

      // Attach single files to request
      request.file_photo = filePhoto
      request.file_nophoto = fileNoPhoto

      const data = await this.curTemplateService.create(request)
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
        request: request,
      })
    }
  }

  @Put('update')
  async update(@Body() request: CuriculumTemplateDto, @Res() res: Response) {
    try {
      const data = await this.curTemplateService.update(request)
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
      const data = await this.curTemplateService.delete(id)

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
