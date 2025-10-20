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
      // Check if file_id exists if provided
      if (data.file_id) {
        const fileExists = await this.prisma.fileItem.findUnique({
          where: { id: BigInt(data.file_id) },
        })

        if (!fileExists) {
          throw new Error(
            `File with ID ${data.file_id} does not exist. Please upload a file first or remove the file_id from your request.`,
          )
        }
      }

      const res = await this.prisma.cVitae.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          summary: data.summary,
          user_id: BigInt(data.user_id),
          cvitae_setting_id: data.cvitae_setting_id
            ? BigInt(data.cvitae_setting_id)
            : BigInt(1),
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
          CVitaeTemplate: {
            create:
              data.curTemplate?.map((template) => ({
                name: template.name,
              })) || [],
          },
          fileCurs: data.file_id
            ? {
                create: {
                  file_id: BigInt(data.file_id),
                },
              }
            : undefined,
        },
        include: {
          CVitaeEducation: true,
          CVitaeSkill: true,
          CVitaeExperience: true,
          CVitaeTemplate: true,
          CVSetting: true,
        },
      })

      return plainToInstance(CuriculumVitaeDto, res, {
        excludeExtraneousValues: true,
      })
    } catch (error) {
      console.error('Error creating CVitae:', error)
      throw error
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
