import { Module } from '@nestjs/common';
import { FileManagerService } from './file-manager.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FileManagerController } from './file-manager.controller';
import { AuthModule } from 'src/core/auth/auth.module';
import { SharedModule } from 'src/shared/infrastructure/shared.module';

@Module({
  providers: [FileManagerService],
  imports: [PrismaModule, AuthModule, SharedModule],
  controllers: [FileManagerController]
})
export class FileManagerModule {}
