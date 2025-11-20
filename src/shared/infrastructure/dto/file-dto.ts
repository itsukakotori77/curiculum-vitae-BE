import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class FileDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image file',
  })
  file: Express.Multer.File
}
export class FileBodyDto {
  @ApiProperty({
    description: 'Folder name',
    example: 'uploads',
    required: false,
  })
  @IsOptional()
  @IsString()
  folder?: string

  @ApiProperty({
    description: 'File description',
    example: 'Profile image',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string
}
export class FileUploadDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image file',
  })
  file: Express.Multer.File

  @ApiProperty({
    description: 'Folder name',
    example: 'uploads',
    required: false,
  })
  @IsOptional()
  @IsString()
  folder?: string

  @ApiProperty({
    description: 'File description',
    example: 'Profile image',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string
}
