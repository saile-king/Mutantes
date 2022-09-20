import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mutante } from 'src/mutantes/entities/mutante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MutantesService {
  constructor(
    @InjectRepository(Mutante)
    private readonly mutantesRepository: Repository<Mutante>,
  ) {}

  findAll(): Promise<Mutante[]> {
    return this.mutantesRepository.find();
  }
}
