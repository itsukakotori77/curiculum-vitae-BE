import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from '@nestjs/class-validator'
import { Expose, Transform } from 'class-transformer'

export class CuriculumVitaeDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? value.toString() : value,
  )
  id?: bigint | number

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  name: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @Matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, {
    message: 'email tidak valid',
  })
  email: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  phone: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  address: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  summary: string

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
