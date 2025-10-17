import { IsNumber, IsOptional, IsString } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'

export class CuriculumSettingDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? value.toString() : value,
  )
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsOptional()
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: '#FFFFF' })
  primary_color?: string

  @Expose()
  @IsOptional()
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: '#FFFFF' })
  sidebar_color?: string

  @Expose()
  @IsOptional()
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: '#FFFFF' })
  skill_color?: string

  @Expose()
  @IsNumber({ allowNaN: false }, { message: 'harus berupa number' })
  @IsOptional()
  @ApiProperty({ default: 0 })
  is_using_photo?: number

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
