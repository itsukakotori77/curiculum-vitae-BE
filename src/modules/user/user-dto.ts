import { Expose, Transform, Type } from 'class-transformer'
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { randomString } from 'src/libs/common'
import { strRandom } from 'src/libs/constans'

export class UserDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'user' })
  name: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'admin' })
  username: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'admin@gmail.com' })
  email: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'admin' })
  password: string

  @IsOptional()
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: randomString(50, strRandom) }) 
  remember_token?: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsNumber({ allowNaN: false }, { message: 'harus berupa numeric' })
  @ApiProperty({ default: 1 })
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  role_id: number | bigint

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  created_at?: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at?: Date
}
