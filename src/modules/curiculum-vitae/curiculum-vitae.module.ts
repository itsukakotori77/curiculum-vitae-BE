import { Module } from '@nestjs/common';
import { CuriculumVitaeService } from './curiculum-vitae.service';
import { CuriculumVitaeController } from './curiculum-vitae.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  providers: [CuriculumVitaeService],
  controllers: [CuriculumVitaeController],
  imports: [PrismaModule, AuthModule]
})
export class CuriculumVitaeModule {}
