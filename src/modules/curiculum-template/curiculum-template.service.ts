import { Injectable } from '@nestjs/common'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumTemplate } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { plainToInstance } from 'class-transformer'
import { CuriculumTemplateDto } from './curiculum-template-dto'
import { CloudinaryService } from 'src/shared/infrastructure/services/cloudinary.service'
import { PayloadTemplateDto } from 'src/core/dto/curiculum-dto'
import { Logger } from '@nestjs/common'


@Injectable()
export class CuriculumTemplateService {
  constructor(
    private prisma: PrismaService,
    private cloud: CloudinaryService,
  ) {}

  async getAll(data: PayloadTemplateDto): Promise<ICurriculumTemplate> {
    console.log('request', data)
    const skip = (data.page - 1) * data.limit
    const whereConditions: any = {}

    // STYLES
    if (data?.styles && data?.styles?.length > 0) {
      whereConditions.type = {
        in: data.styles,
      }
    }

    // IS PHOTO
    if (data.isPhoto !== undefined) {
      whereConditions.is_photo = data.isPhoto == 1 ? true : false
    }

    const res = await this.prisma.cVitaeTemplate.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
      where: whereConditions,
    })

    const totalData = res.length
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(CuriculumTemplateDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<CuriculumTemplateDto | null> {
    const res = await this.prisma.cVitaeTemplate.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumTemplateDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(data: CuriculumTemplateDto): Promise<CuriculumTemplateDto> {
    try {
      let photoUrl: any
      let noPhotoUrl: any

      // Upload images if provided
      if (data.file_photo || data.file_nophoto) {
        const filesToUpload: { file: Express.Multer.File; folder?: string }[] =
          []

        if (data.file_photo) {
          filesToUpload.push({
            file: data.file_photo,
            folder: 'cv_images/templates',
          })
        }

        if (data.file_nophoto) {
          filesToUpload.push({
            file: data.file_nophoto,
            folder: 'cv_images/templates',
          })
        }

        Logger.log('Files to upload:', filesToUpload)
        const uploadResults = await this.cloud.uploadImages(filesToUpload)
        Logger.log('Upload results:', uploadResults)

        // Map results back (assumes uploadImages returns URLs in same order)
        let resultIndex = 0
        if (data.file_photo) {
          photoUrl = uploadResults[resultIndex++]?.url
        }
        if (data.file_nophoto) {
          noPhotoUrl = uploadResults[resultIndex++]?.url
        }
      }

      // Create database record with uploaded URLs
      const res = await this.prisma.cVitaeTemplate.create({
        data: {
          name: data.name,
          type: data.type,
          is_photo: data.is_photo ?? false,
          template_photo: photoUrl,
          template_nophoto: noPhotoUrl,
          cvitaes: data.cvitae_id
            ? {
                create: {
                  cvitae: {
                    connect: { id: BigInt(+data.cvitae_id!) },
                  },
                },
              }
            : undefined,
        },
        include: {
          cvitaes: {
            include: {
              cvitae: true,
            },
          },
        },
      })

      return plainToInstance(CuriculumTemplateDto, res, {
        excludeExtraneousValues: true,
      })
    } catch (error) {
      console.error('Create template failed:', error)

      // TODO: Implement cleanup of uploaded files if DB operation fails
      // if (photoUrl || noPhotoUrl) {
      //   await this.cloud.deleteImages([photoUrl, noPhotoUrl].filter(Boolean));
      // }

      throw new Error(
        `Failed to create curriculum template: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }
  }

  async update(data: CuriculumTemplateDto): Promise<CuriculumTemplateDto> {
    const res = await this.prisma.cVitaeTemplate.update({
      where: { id: data.id },
      data: {
        name: data.name,
        type: data.type,
        is_photo: data.is_photo!,
      },
      include: {
        cvitaes: {
          include: {
            cvitae: true,
          },
        },
      },
    })

    return plainToInstance(CuriculumTemplateDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.cVitaeTemplate.delete({
      where: { id },
    })

    return !!res
  }
}
