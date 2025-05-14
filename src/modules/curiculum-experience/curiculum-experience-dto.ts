import { IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator'
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
  company: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  position: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  start_date: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  end_date: string

  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  @IsNumber({}, { message: 'harus berupa numeric' })
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
