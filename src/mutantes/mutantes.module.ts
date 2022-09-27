/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MutantesController } from './controllers/mutantes.controller';
import { MutantesService } from './services/mutantes.service';
import { Mutante } from './entities/mutante.entity';
import { SuperpoderController } from './controllers/superpoder.controller';
import { SuperpoderService } from './services/superpoder.service';
import { Superpoder } from './entities/superpoder.entity';
import { VehiculosController } from './controllers/vehiculos.controller';
import { VehiculosService } from './services/vehiculos.service';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  controllers: [MutantesController, SuperpoderController, VehiculosController],
  providers: [MutantesService, SuperpoderService, VehiculosService],
  imports: [TypeOrmModule.forFeature([Mutante, Superpoder, Vehiculo,])],
  exports: [TypeOrmModule, MutantesService],
})
export class MutantesModule {}
