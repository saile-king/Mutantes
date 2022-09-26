import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateSuperpoderDto,
  UpdateSuperpoderDto,
} from '../dtos/superpoder.dto';
import { Superpoder } from '../entities/superpoder.entity';
import { MutantesService } from './mutantes.service';

@Injectable()
export class SuperpoderService {
  constructor(
    @InjectRepository(Superpoder)
    private readonly superpoderRepository: Repository<Superpoder>,
    private mutantesService: MutantesService,
  ) {}

  findAll() {
    return this.superpoderRepository.find({
      relations: ['mutante'],
    });
  }

  async create(data: CreateSuperpoderDto) {
    const newSuperpoder = this.superpoderRepository.create(data);
    if (data.mutanteId) {
      const mutante = await this.mutantesService.findOne(data.mutanteId);
      newSuperpoder.mutante = mutante;
    }
    return this.superpoderRepository.save(newSuperpoder);
  }

  async update(id: number, changes: UpdateSuperpoderDto) {
    const newSuperpoder = await this.superpoderRepository.findOneBy({ id });
    if (changes.mutanteId) {
      const mutante = await this.mutantesService.findOne(changes.mutanteId);
      newSuperpoder.mutante = mutante;
    }
    return this.superpoderRepository.save(newSuperpoder);
  }
}
