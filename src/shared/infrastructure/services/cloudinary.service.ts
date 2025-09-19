import { Injectable } from '@nestjs/common'
import { v2 as cloudinary, DeleteApiResponse } from 'cloudinary'
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
    try {
      const result = await new Promise<UploadApiResponse>((resolve, reject) => {
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
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteFile(
    publicId: string,
    resourceType: 'image' | 'video' | 'raw' | 'auto' = 'image',
  ): Promise<DeleteApiResponse> {
    try {
      const result = await new Promise<DeleteApiResponse>((resolve, reject) => {
        cloudinary.uploader.destroy(
          publicId,
          {
            resource_type: resourceType,
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          },
        )
      })
      return result
    } catch (error) {
      throw error
    }
  }
}
