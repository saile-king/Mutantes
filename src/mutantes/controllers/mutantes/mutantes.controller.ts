import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateMutanteDto } from 'src/mutantes/dtos/mutante.dto';
import { MutantesService } from 'src/mutantes/services/mutantes/mutantes.service';

@Controller('mutantes')
export class MutantesController {
  constructor(private mutantesService: MutantesService) {}

  @Get()
  getMutantes() {
    return this.mutantesService.findAll();
  }

  @Get(':mutanteId')
  getOne(@Param('mutanteId', ParseIntPipe) mutanteId: number) {
    return this.mutantesService.findOne(mutanteId);
  }

  @Post()
  create(@Body() payload: CreateMutanteDto) {
    return this.mutantesService.create(payload);
  }
}
