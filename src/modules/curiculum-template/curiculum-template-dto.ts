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
    if (value === 1 || value === '1') return true
    if (value === 0 || value === '0') return false

    return Boolean(value)
  })
  // @IsNumber()
  @ApiProperty({ default: 1 })
  is_photo?: boolean

  // FIXED: Add type and format for file upload
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Template Photo',
    required: false
  })
  file_photo?: Express.Multer.File

  // FIXED: Add type and format for file upload
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Template NoPhoto',
    required: false
  })
  file_nophoto?: Express.Multer.File

  @Expose()
  @IsString()
  @IsOptional()
  @ApiProperty({ default: '/path/name.png' })
  template_photo?: string

  @Expose()
  @IsString()
  @IsOptional()
  @ApiProperty({ default: '/path/name.png' })
  template_nophoto?: string

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