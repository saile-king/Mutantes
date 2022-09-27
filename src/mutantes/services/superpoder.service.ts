import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
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
    return this.superpoderRepository.find();
  }

  create(data: CreateSuperpoderDto) {
    const newSuperpoder = this.superpoderRepository.create(data);
    return this.superpoderRepository.save(newSuperpoder);
  }

  async update(id: number, changes: UpdateSuperpoderDto) {
    const newSuperpoder = await this.superpoderRepository.findOneBy({ id });
    this.superpoderRepository.merge(newSuperpoder, changes);
    return this.superpoderRepository.save(newSuperpoder);
  }
}
