import { Expose, Transform, Type } from 'class-transformer'
import { PaginationPayloadDto } from './pagination-payload-dto'
import { IsArray, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CVitaeEnum } from 'src/enum/cvitae'

export class PayloadTemplateDto extends PaginationPayloadDto {
  @Expose()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({
    type: Number,
    required: false,
    description: 'Filter by photo availability',
    example: 1,
  })
  isPhoto?: number

  @Expose()
  @IsOptional()
  @IsArray()
  @IsEnum(CVitaeEnum, { each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) return value
    if (typeof value === 'string') return [value]
    return value
  })
  @ApiProperty({
    enum: CVitaeEnum,
    isArray: true,
    description: 'Filter by CV template styles',
    default: [CVitaeEnum.ATS, CVitaeEnum.MODERN],
  })
  styles?: CVitaeEnum[]
}
