import { IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'

export class CuriculumExperienceDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  id?: bigint | number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'PT. ABC' })
  company: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'Software Engineer' })
  position: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '2025-03-03 16:30:00' })
  start_date: string
  
  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '2025-03-03 16:30:00' })
  end_date: string

  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  @IsNumber({}, { message: 'harus berupa numeric' })
  @ApiProperty({ default: 1 })
  cvitae_id: BigInt | number

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  create_at: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at: Date
}
