/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MutantesController } from './controllers/mutantes/mutantes.controller';
import { MutantesService } from './services/mutantes/mutantes.service';
import { Mutante } from './entities/mutante.entity';

@Module({
  controllers: [MutantesController],
  providers: [MutantesService],
  imports: [TypeOrmModule.forFeature([Mutante])],
  exports: [TypeOrmModule, MutantesService],
})
export class MutantesModule {}
