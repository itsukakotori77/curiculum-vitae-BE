import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationPayloadDto } from 'src/core/dto/pagination-payload-dto';
import { IResponseUser } from 'src/interface/user';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './user-dto';
import * as bcrypt from 'bcrypt';
import { randomString } from 'src/libs/common';
import { strRandom } from 'src/libs/constans';
import { ConstantConfig } from 'src/core/config/constant-config';

@Injectable()
export class UserService {
   constructor(
    private prisma: PrismaService,
    private readonly contants: ConstantConfig,
  ) {}

   private saltRounds = 10

   async getAll(data: PaginationPayloadDto): Promise<IResponseUser> {
      const skip = (data.page - 1) * data.limit
      const res = await this.prisma.user.findMany({
        skip: skip,
        take: data.limit,
        orderBy: { [data.sortBy]: data.sortSystem },
      })
  
      const totalData = res.length
      const totalPage = Math.ceil(totalData / data.limit)
  
      return {
        data: plainToInstance(UserDto, res, { excludeExtraneousValues: true }),
        totalData,
        totalPage,
        currentPage: data.page,
      }
    }
  
    async getById(id: number): Promise<UserDto | null> {
      const res = await this.prisma.user.findUnique({
        where: { id },
      })
  
      if(res){
        return plainToInstance(UserDto, res, { excludeExtraneousValues: true })
      }
  
      return null
    }
  
    async create(data: UserDto): Promise<UserDto> {
      const hashedPassword = await bcrypt.hash(data.password, this.saltRounds)
      const res = await this.prisma.user.create({
        data: {
          name: data.name,
          username: data.username,
          email: data.email,
          password: hashedPassword,
          remember_token: randomString(50, strRandom),
          // role: {
          //   connect: { id: data.role_id },
          // },
        },
      })
  
      return plainToInstance(UserDto, res, { excludeExtraneousValues: true })
    }
  
    async updateUser(id: number, data: UserDto): Promise<UserDto> {
      const hashedPassword = await bcrypt.hash(data.password, this.saltRounds)
      const res = await this.prisma.user.update({
        where: { id },
        data: {
          name: data.name,
          username: data.username,
          email: data.email,
          password: hashedPassword,
          // role: {
          //   connect: { id: data.role_id },
          // },
        },
      })
  
      return plainToInstance(UserDto, res, { excludeExtraneousValues: true })
    }
  
    async isUsernameTaken(username: string): Promise<boolean> {
      const res = await this.prisma.user.findFirst({
        where: { username },
      })
  
      return !!res
    }
}
