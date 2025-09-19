import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class FileManagerDto {

  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 'http://www.test.com' })
  url: string
  
  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '9999999999' })
  public_id: string
  
  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '9999999999' })
  folder?: string 
  
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
