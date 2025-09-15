export interface IFileUploadService {
  uploadImage(file: Express.Multer.File, folder?: string): Promise<{ url: string; publicId: string }>;
}