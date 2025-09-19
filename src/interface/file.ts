import { FileManagerDto } from 'src/modules/file-manager/file-manager-dto'
import { IBaseResponse } from './cvitae'

export interface IFileItem extends IBaseResponse {
  data: FileManagerDto[] | FileManagerDto
}

export interface IFile extends FileManagerDto {
  file: Express.Multer.File | any
  folder?: string
}

export interface ImageKitUploadResponse {
  fileId: string
  name: string
  size: number
  versionInfo?: {
    id: string
    name: string
  }
  filePath: string
  url: string
  fileType: string
  height?: number
  width?: number
  orientation?: number
  thumbnailUrl?: string
  AITags?: Array<{
    name: string
    confidence: number
    source: string
  }>
  customMetadata?: Record<string, any>
  tags?: string[]
}
