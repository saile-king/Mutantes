/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import {
  CreateMutanteDto,
  UpdateMutanteDto,
} from 'src/mutantes/dtos/mutante.dto';
import { MutantesService } from 'src/mutantes/services/mutantes/mutantes.service';

@ApiTags('mutantes')
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

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateMutanteDto,
  ) {
    return this.mutantesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.mutantesService.remove(id);
  }
}
