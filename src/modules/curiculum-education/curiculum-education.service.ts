import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumEducation } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumEducationDto } from './curiculum-education-dto'

@Injectable()
export class CuriculumEducationService {
  constructor(private prisma: PrismaService) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumEducation> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitaeEducation.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = res.length
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(CuriculumEducationDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<CuriculumEducationDto | null> {
    const res = await this.prisma.cVitaeEducation.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumEducationDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(data: CuriculumEducationDto): Promise<CuriculumEducationDto> {
    const res = await this.prisma.cVitaeEducation.create({
      data: {
        school: data.school,
        degree: data.degree,
        start_date: data.start_date,
        end_date: data.end_date,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumEducationDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumEducationDto): Promise<CuriculumEducationDto> {
    const res = await this.prisma.cVitaeEducation.update({
      where: { id: +data.id! },
      data: {
        school: data.school,
        degree: data.degree,
        start_date: data.start_date,
        end_date: data.end_date,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumEducationDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.cVitaeEducation.delete({
      where: { id },
    })

    return !!res 
  }
}
