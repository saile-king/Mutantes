import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import {
  CreateSuperpoderDto,
  UpdateSuperpoderDto,
} from '../dtos/superpoder.dto';
import { SuperpoderService } from '../services/superpoder.service';
@ApiTags('Superpoder')
@Controller('superpoder')
export class SuperpoderController {
  constructor(private superpoderService: SuperpoderService) {}

  @Get()
  findAll() {
    return this.superpoderService.findAll();
  }

  @Post()
  create(@Body() payload: CreateSuperpoderDto) {
    return this.superpoderService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSuperpoderDto,
  ) {
    return this.superpoderService.update(id, payload);
  }
}
