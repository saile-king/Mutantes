import { Module } from '@nestjs/common';
import { MutantesService } from './services/mutantes/mutantes.service';

@Module({
  providers: [MutantesService]
})
export class MutantesModule {}
