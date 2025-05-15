import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumExperience } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumExperienceDto } from './curiculum-experience-dto'

@Injectable()
export class CuriculumExperienceService {
  constructor(private prisma: PrismaService) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumExperience> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitaeExperience.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = res.length
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(CuriculumExperienceDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<CuriculumExperienceDto | null> {
    const res = await this.prisma.cVitaeExperience.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumExperienceDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(data: CuriculumExperienceDto): Promise<CuriculumExperienceDto> {
    const res = await this.prisma.cVitaeExperience.create({
      data: {
        position: data.position,
        company: data.company,
        start_date: data.start_date,
        end_date: data.end_date,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumExperienceDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumExperienceDto): Promise<CuriculumExperienceDto> {
    const res = await this.prisma.cVitaeExperience.update({
      where: { id: data.id },
      data: {
        position: data.position,
        company: data.company,
        start_date: data.start_date,
        end_date: data.end_date,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumExperienceDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.cVitaeExperience.delete({
      where: { id },
    })

    return !!res
  }
}
