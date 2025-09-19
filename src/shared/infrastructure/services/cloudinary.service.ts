// src/shared/infrastructure/services/cloudinary.service.ts
import { Injectable } from '@nestjs/common'
import { v2 as cloudinary } from 'cloudinary'
import { UploadApiResponse } from 'cloudinary'
import { ConstantConfig } from '../config/constant-config'

@Injectable()
export class CloudinaryService {
  constructor(private constant: ConstantConfig) {
    cloudinary.config({
      cloudinary_url: this.constant.apiImage,
    })
  }

  async uploadImage(
    file: Express.Multer.File,
    folder?: string,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'image',
            folder: folder || 'uploads',
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result!)
          },
        )
        .end(file.buffer)
    })
  }
}
