import { Module } from '@nestjs/common';
import { FileCurrService } from './file-curr.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FileCurrService]
})
export class FileCurrModule {}
