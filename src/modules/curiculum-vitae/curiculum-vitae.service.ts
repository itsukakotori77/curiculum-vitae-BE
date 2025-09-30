import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumVitae } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumVitaeDto } from './curiculum-vitae-dto'
import { FileCurrService } from '../file-curr/file-curr.service'
import { FileCurrDto } from '../file-curr/file-curr-dto'

@Injectable()
export class CuriculumVitaeService {
  constructor(
    private prisma: PrismaService,
    private fileCur: FileCurrService,
  ) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumVitae> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitae.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = await this.prisma.cVitae.count()
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
    const res = await this.prisma.cVitae.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumVitaeDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(
    data: CuriculumVitaeDto,
  ): Promise<
    | (CuriculumVitaeDto &
        Omit<FileCurrDto, 'id' | 'created_at' | 'updated_at'>)
    | any
  > {
    try {
      const res = await this.prisma.cVitae.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          summary: data.summary,
          user: {
            connect: { id: data.user_id },
          },
          CVSetting: data.cvitae_setting_id
            ? {
                connect: { id: data.cvitae_setting_id },
              }
            : undefined,
          CVitaeEducation: {
            create:
              data.curEducation?.map((edu) => ({
                school: edu.school,
                degree: edu.degree,
                start_date: new Date(edu.start_date!),
                end_date: new Date(edu.end_date!),
              })) || [],
          },
          CVitaeSkill: {
            create:
              data.curSkill?.map((skill) => ({
                skill: skill.skill,
                level: skill.level,
              })) || [],
          },
          CVitaeExperience: {
            create:
              data.curExperience?.map((exp) => ({
                company: exp.company,
                position: exp.position,
                start_date: new Date(exp.start_date!),
                end_date: new Date(exp.end_date!),
              })) || [],
          },
        },
        include: {
          CVitaeEducation: true,
          CVitaeSkill: true,
          CVitaeExperience: true,
          CVSetting: true,
        },
      })

      const params = {
        cvtae_id: +res.id.toString(),
        file_id: +data.file_id?.toString()!,
      }

      await this.fileCur.store(params)

      return plainToInstance(CuriculumVitaeDto, res, {
        excludeExtraneousValues: true,
      })
    } catch (error) {
      return error
    }
  }

  async update(data: CuriculumVitaeDto): Promise<CuriculumVitaeDto> {
    const res = await this.prisma.cVitae.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        summary: data.summary,
        user: {
          connect: { id: data.user_id },
        },
      },
    })

    return plainToInstance(CuriculumVitaeDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.cVitae.delete({
      where: { id },
    })

    return !!res
  }
}
