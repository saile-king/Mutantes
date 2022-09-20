import { Controller, Get } from '@nestjs/common';
import { MutantesService } from 'src/mutantes/services/mutantes/mutantes.service';

@Controller('mutantes')
export class MutantesController {
  constructor(private mutantesService: MutantesService) {}

  @Get()
  getMutantes() {
    return this.mutantesService.findAll();
  }
}
