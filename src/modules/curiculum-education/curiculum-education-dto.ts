import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'

export class CuriculumEducationDto {
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  id?: BigInt | number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'user' })
  school: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'S1' })
  degree: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '2025-03-03 16:30:00' })
  @IsOptional()
  start_date?: Date

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '2025-03-03 16:30:00' })
  @IsOptional()
  end_date?: Date

  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
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
  created_at: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at: Date
}
