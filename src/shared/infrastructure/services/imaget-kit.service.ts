import { Injectable } from '@nestjs/common'
import { ConstantConfig } from '../config/constant-config'
import { ImageKitUploadResponse } from 'src/interface/file'

const ImageKit = require('imagekit');

@Injectable()
export class ImagetKitService {
  private imagekit: any
  constructor(private constant: ConstantConfig) {
    this.imagekit = new ImageKit({
      publicKey: this.constant.imageKitKey,
      privateKey: this.constant.imageKitSecret,
      urlEndpoint: this.constant.imageKitUrl,
    })
  }

  async uploadImage(
    file: Express.Multer.File,
    folder?: string,
  ): Promise<ImageKitUploadResponse> {
    const fileName = `${Date.now()}_${file.originalname}`

    const uploadResponse = await this.imagekit.upload({
      file: file.buffer,
      fileName: fileName,
      folder: folder || '/',
      useUniqueFileName: true,
      tags: ['upload'],
      customMetadata: {
        uploadedAt: new Date().toISOString(),
        originalName: file.originalname,
        mimeType: file.mimetype,
      },
    })

    return uploadResponse
  }

  async deleteFile(fileId: string): Promise<void> {
    await this.imagekit.deleteFile(fileId)
  }
}
