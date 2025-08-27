import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CuriculumSettingDto } from './curiculum-setting-dto'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class CuriculumSettingService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async geById(id: number): Promise<CuriculumSettingDto | null> {
    const res = await this.prisma.cVSetting.findUnique({
      where: { id },
    })

    if (id) {
      return plainToInstance(CuriculumSettingDto, res, {
        excludeExtraneousValues: true,
      })
    }

    return null
  }
  async create(data: CuriculumSettingDto): Promise<CuriculumSettingDto> {
    const res = await this.prisma.cVSetting.create({
      data,
    })

    return plainToInstance(CuriculumSettingDto, res, {
      excludeExtraneousValues: true,
    })
  }

  async update(data: CuriculumSettingDto): Promise<CuriculumSettingDto> {
    const res = await this.prisma.cVSetting.update({
      where: { id: +data.id?.toString()! },
      data,
    })

    return plainToInstance(CuriculumSettingDto, res, {
      excludeExtraneousValues: true,
    })
  }
}
