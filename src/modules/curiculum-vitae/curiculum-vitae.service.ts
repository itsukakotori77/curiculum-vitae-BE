import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PaginationPayloadDto } from 'src/global/dto/pagination-payload-dto'
import { ICurriculumVitae } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumVitaeDto } from './curiculum-vitae-dto'

@Injectable()
export class CuriculumVitaeService {
  constructor(private prisma: PrismaService) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumVitae> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.curiculumSkill.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = res.length
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(CuriculumVitaeDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<CuriculumVitaeDto | null> {
    const res = await this.prisma.curiculumSkill.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumVitaeDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(data: CuriculumVitaeDto): Promise<CuriculumVitaeDto> {
    const res = await this.prisma.curiculumSkill.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        summary: data.summary,
      },
    })

    return plainToInstance(CuriculumVitaeDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumVitaeDto): Promise<CuriculumVitaeDto> {
    const res = await this.prisma.curiculumSkill.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        summary: data.summary,
      },
    })

    return plainToInstance(CuriculumVitaeDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.curiculumSkill.delete({
      where: { id },
    })

    return !!res
  }
}
