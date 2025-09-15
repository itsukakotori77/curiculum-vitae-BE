import { ApiProperty } from "@nestjs/swagger";

export class FileDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Image file to upload',
    example: 'image.jpg'
  })
  file: Express.Multer.File
}
