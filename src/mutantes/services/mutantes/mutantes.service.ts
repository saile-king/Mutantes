import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateMutanteDto,
  UpdateMutanteDto,
} from 'src/mutantes/dtos/mutante.dto';
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

  async findOne(id: number) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    if (!mutante) {
      throw new NotFoundException(`Mutante #${id} not found`);
    }
    return mutante;
  }

  create(data: CreateMutanteDto) {
    const newMutante = this.mutantesRepository.create(data);
    return this.mutantesRepository.save(newMutante);
  }

  async update(id: number, changes: Partial<UpdateMutanteDto>) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    this.mutantesRepository.merge(mutante, changes);
    return this.mutantesRepository.save(mutante);
  }

  async remove(id: number) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    if (!mutante) {
      throw new NotFoundException(`Mutante #${id} not found`);
    }
    return this.mutantesRepository.remove(mutante);
  }
}
