import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from '@nestjs/class-validator'
import { Expose, Transform } from 'class-transformer'

export class CuriculumSkillDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'string' ? +value.toString() : +value,
  )
  @IsOptional()
  id?: BigInt | number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  skill: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsNumber({ allowNaN: false }, { message: 'harus berupa number' })
  @Min(1, { message: 'minimal 1' })
  @Max(10, { message: 'maksimal 10' })
  level: number

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
  created_at: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at: Date
}
