import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
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
}
