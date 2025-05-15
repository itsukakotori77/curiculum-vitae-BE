import { Injectable } from '@nestjs/common'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumTemplate } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { plainToInstance } from 'class-transformer'
import { CuriculumTemplateDto } from './curiculum-template-dto'

@Injectable()
export class CuriculumTemplateService {
  constructor(private prisma: PrismaService) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumTemplate> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitaeTemplate.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
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
    const res = await this.prisma.cVitaeTemplate.create({
      data: {
        name: data.name,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumTemplateDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumTemplateDto): Promise<CuriculumTemplateDto> {
    const res = await this.prisma.cVitaeTemplate.update({
      where: { id: data.id },
      data: {
        name: data.name,
        cvitae: {
          connect: { id: +data.cvitae_id! },
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
