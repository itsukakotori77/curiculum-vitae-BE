import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto'
import { ICurriculumVitae } from 'src/interface/cvitae'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumVitaeDto } from './curiculum-vitae-dto'
import { CuriculumExperienceService } from '../curiculum-experience/curiculum-experience.service'
import { CuriculumEducationService } from '../curiculum-education/curiculum-education.service'
import { CuriculumSkillService } from '../curiculum-skill/curiculum-skill.service'

@Injectable()
export class CuriculumVitaeService {
  constructor(
    private skills: CuriculumSkillService,
    private exp: CuriculumExperienceService,
    private education: CuriculumEducationService,
    private prisma: PrismaService,
  ) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumVitae> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitae.findMany({
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

  async create(data: CuriculumVitaeDto): Promise<CuriculumVitaeDto> {
    
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
        CVSetting: data.cvitae_setting_id ? {
          connect: { id: data.cvitae_setting_id },
        } : undefined,
        CVitaeEducation: {
          create: data.curEducation?.map(edu => ({
            school: edu.school,
            degree: edu.degree,
            start_date: new Date(edu.start_date),
            end_date: new Date(edu.end_date),
          })) || []
        },
        CVitaeSkill: {
          create: data.curSkill?.map(skill => ({
            skill: skill.skill,
            level: skill.level,
          })) || []
        },
        CVitaeExperience: {
          create: data.curExperience?.map(exp => ({
            company: exp.company,
            position: exp.position,
            start_date: new Date(exp.start_date),
            end_date: new Date(exp.end_date),
          })) || []
        }
      },
      include: {
        CVitaeEducation: true,
        CVitaeSkill: true,
        CVitaeExperience: true,
        CVSetting: true,
      }
    })

    return plainToInstance(CuriculumVitaeDto, res, {
      excludeExtraneousValues: true,
    })
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
