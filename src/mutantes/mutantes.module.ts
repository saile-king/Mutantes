/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MutantesController } from './controllers/mutantes.controller';
import { MutantesService } from './services/mutantes.service';
import { Mutante } from './entities/mutante.entity';
import { SuperpoderController } from './controllers/superpoder.controller';
import { Superpoder } from './entities/superpoder.entity';
import { SuperpoderService } from './services/superpoder.service';

@Module({
  controllers: [MutantesController, SuperpoderController],
  providers: [MutantesService, SuperpoderService],
  imports: [TypeOrmModule.forFeature([Mutante, Superpoder])],
  exports: [TypeOrmModule, MutantesService],
})
export class MutantesModule {}
