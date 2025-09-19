import { Global, Module } from '@nestjs/common';
import { CloudinaryService } from './services/cloudinary.service';
import { ImagetKitService } from './services/imaget-kit.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [CloudinaryService, ImagetKitService],
  exports: [CloudinaryService, ImagetKitService]
})
export class SharedModule {}
