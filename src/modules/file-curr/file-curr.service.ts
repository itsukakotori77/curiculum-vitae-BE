import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { FileCurrDto } from './file-curr-dto'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class FileCurrService {
  constructor(private prisma: PrismaService) {}

  async store(data: FileCurrDto): Promise<FileCurrDto> {
    const res = await this.prisma.fileCurr.create({
      data: {
        cvtae_id: +data.cvtae_id,
        file_id: +data.file_id,
      },
    })

    return plainToInstance(FileCurrDto, res, { excludeExtraneousValues: true })
  }

  async getById(id: number): Promise<FileCurrDto> {
    const res = await this.prisma.fileCurr.findUnique({
      where: { id },
    })

    return plainToInstance(FileCurrDto, res, { excludeExtraneousValues: true })
  }

  async delete(id: number): Promise<boolean | any> {
    const res = await this.prisma.fileCurr.delete({
      where: { id },
    })

    return !!res
  }
}
