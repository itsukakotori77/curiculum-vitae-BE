import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto';
import { ICurriculumSkill } from 'src/interface/cvitae';
import { PrismaService } from 'src/prisma/prisma.service';
import { CuriculumSkillDto } from './curiculum-skill-dto';

@Injectable()
export class CuriculumSkillService {
  constructor(private prisma: PrismaService) {}

  async getAll(data: PaginationPayloadDto): Promise<ICurriculumSkill> {
    const skip = (data.page - 1) * data.limit
    const res = await this.prisma.cVitaeSkill.findMany({
      skip: skip,
      take: data.limit,
      orderBy: { [data.sortBy]: data.sortSystem },
    })

    const totalData = res.length
    const totalPage = Math.ceil(totalData / data.limit)

    return {
      data: plainToInstance(CuriculumSkillDto, res, {
        excludeExtraneousValues: true,
      }),
      totalData,
      totalPage,
      currentPage: data.page,
    }
  }

  async getById(id: number): Promise<CuriculumSkillDto | null> {
    const res = await this.prisma.cVitaeSkill.findUnique({
      where: { id },
    })

    if (res) {
      return plainToInstance(CuriculumSkillDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }

  async create(data: CuriculumSkillDto): Promise<CuriculumSkillDto> {
    const res = await this.prisma.cVitaeSkill.create({
      data: {
        skill: data.skill,
        level: data.level,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumSkillDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumSkillDto): Promise<CuriculumSkillDto> {
    const res = await this.prisma.cVitaeSkill.update({
      where: { id: +data.id! },
      data: {
        skill: data.skill,
        level: data.level,
        cvitae: {
          connect: { id: +data.cvitae_id! },
        },
      },
    })

    return plainToInstance(CuriculumSkillDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.prisma.cVitaeSkill.delete({
      where: { id },
    })

    if (res) return true
    return false
  }
}
