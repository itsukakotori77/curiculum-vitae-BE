import { IsNotEmpty, IsNumber, IsString, Min } from "@nestjs/class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class PaginationPayloadDto {
  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsNumber({ allowNaN: false }, { message: 'harus berupa numeric' })
  @Min(1)
  @ApiProperty({ default: 1 })
  page: number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsNumber({}, { message: 'harus berupa numeric' })
  @ApiProperty({ default: 10 })
  limit: number

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'created_at' })
  sortBy: string

  @Expose()
  @IsNotEmpty({ message: 'harus diisi' })
  @IsString({ message: 'harus berupa string' })
  @ApiProperty({ default: 'desc' })
  sortSystem: string
}
