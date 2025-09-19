import { Injectable } from '@nestjs/common'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { FileManagerDeleteDto, FileManagerDto } from './file-manager-dto'
import { plainToInstance } from 'class-transformer'
import { IFile, IFileItem } from 'src/interface/file'
import { CloudinaryService } from 'src/shared/infrastructure/services/cloudinary.service'
import { ImagetKitService } from 'src/shared/infrastructure/services/imaget-kit.service'

@Injectable()
export class FileManagerService {
  constructor(
    private prisma: PrismaService,
    private cloud: CloudinaryService,
    private imageKit: ImagetKitService,
  ) {}

  async getAll(data: PaginationPayloadDto): Promise<IFileItem> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.fileItem.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = await this.prisma.fileItem.count()
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(FileManagerDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<FileManagerDto | null> {
    const res = await this.prisma.fileItem.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(FileManagerDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async store(data: IFile): Promise<FileManagerDto | any> {
    try {
      const uploadResult = await this.cloud.uploadImage(data.file, data.folder)

      if (!uploadResult) {
        throw new Error('File upload failed')
      }

      const fileItem = await this.prisma.fileItem.create({
        data: {
          public_id: uploadResult.public_id,
          url: uploadResult.url,
        },
      })

      return plainToInstance(FileManagerDto, fileItem, {
        excludeExtraneousValues: true,
      })
    } catch (error) {
      console.error('Store operation failed:', error)
      throw new Error(`Failed to store file: ${error.message}`)
    }
  }

  async delete(
    data: FileManagerDeleteDto,
  ): Promise<{ message: string; data: any } | any> {
    try {
      const deleteResult = await this.cloud.deleteFile(
        data.public_id,
        data.resourceType || 'image',
      )

      if (!deleteResult) {
        throw new Error('File delete failed')
      }

      const res = await this.prisma.fileItem.delete({
        where: { id: data.id! },
      })

      return {
        message: deleteResult.message,
        data: plainToInstance(FileManagerDto, res, {
          excludeExtraneousValues: true,
        }),
      }
    } catch (error) {
      return {
        message: error.message,
        data: null,
      }
    }
  }
}
