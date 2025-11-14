import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'
import { CVitaeEnum } from 'src/enum/cvitae'

export class CuriculumTemplateDto {
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined
    return typeof value === 'bigint' ? +value.toString() : +value
  })
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 'Template 1' })
  name: string

  @Expose()
  @IsEnum(CVitaeEnum, { message: 'tipe harus ATS atau MODERN' })
  @ApiProperty({ enum: CVitaeEnum, default: CVitaeEnum.ATS })
  type?: CVitaeEnum
  
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined
    return typeof value === 'bigint' ? +value.toString() : +value
  })
  @IsOptional()
  @IsNumber({}, { message: 'harus berupa numeric' })
  @ApiProperty({ default: 1 })
  cvitae_id?: BigInt | number


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
