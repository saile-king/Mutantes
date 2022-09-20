import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MutantesController } from './controllers/mutantes/mutantes.controller';
import { Mutante } from './entities/mutante.entity';
import { MutantesService } from './services/mutantes/mutantes.service';

@Module({
  controllers: [MutantesController],
  providers: [MutantesService],
  imports: [TypeOrmModule.forFeature([Mutante])],
  exports: [TypeOrmModule, MutantesService],
})
export class MutantesModule {}
