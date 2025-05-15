import { IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'

export class CuriculumTemplateDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'string' ? +value.toString() : +value,
  )
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsString({message: 'harus berupa string'})
  @IsNotEmpty({message: 'harus diisi'})
  @ApiProperty({ default: 'Template 1' })
  name: string

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
  created_at?: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at?: Date
}
