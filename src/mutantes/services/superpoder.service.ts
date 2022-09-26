import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSuperpoderDto } from '../dtos/superpoder.dto';
import { Superpoder } from '../entities/superpoder.entity';

@Injectable()
export class SuperpoderService {
  constructor(
    @InjectRepository(Superpoder)
    private readonly superpoderRepository: Repository<Superpoder>,
  ) {}

  create(data: CreateSuperpoderDto) {
    const newMutante = this.superpoderRepository.create(data);
    return this.superpoderRepository.save(newMutante);
  }
}
