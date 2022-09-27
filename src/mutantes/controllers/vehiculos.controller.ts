import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateVehiculoDto, UpdateVehiculoDto } from '../dtos/vehiculo.dto';
import { VehiculosService } from '../services/vehiculos.service';

@ApiTags('Vehiculos')
@Controller('vehiculos')
export class VehiculosController {
  constructor(private vehiculosService: VehiculosService) {}

  @Get()
  findAll() {
    return this.vehiculosService.findAll();
  }

  @Post()
  create(@Body() payload: CreateVehiculoDto) {
    return this.vehiculosService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateVehiculoDto,
  ) {
    return this.vehiculosService.update(id, payload);
  }
}
