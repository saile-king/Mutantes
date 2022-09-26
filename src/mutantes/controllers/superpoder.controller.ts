import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSuperpoderDto } from '../dtos/superpoder.dto';
import { SuperpoderService } from '../services/superpoder.service';
@ApiTags('mutantes')
@Controller('superpoder')
export class SuperpoderController {
  constructor(private superpoderService: SuperpoderService) {}

  @Post()
  create(@Body() payload: CreateSuperpoderDto) {
    return this.superpoderService.create(payload);
  }
}
