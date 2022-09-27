/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateMutanteDto,
  UpdateMutanteDto,
} from 'src/mutantes/dtos/mutante.dto';
import { Mutante } from 'src/mutantes/entities/mutante.entity';
import { In, Repository } from 'typeorm';
import { Superpoder } from '../entities/superpoder.entity';
import { Vehiculo } from '../entities/vehiculo.entity';

@Injectable()
export class MutantesService {
  constructor(
    @InjectRepository(Mutante)
    private readonly mutantesRepository: Repository<Mutante>,
    @InjectRepository(Vehiculo)
    private readonly vehiculosRepository: Repository<Vehiculo>,
    @InjectRepository(Superpoder)
    private readonly superpoderesRepository: Repository<Superpoder>,
  ) {}

  findAll(): Promise<Mutante[]> {
    return this.mutantesRepository.find(
      { relations: ['vehiculos', 'superpoderes'] }
    );
  }

  async findName(nombre: string) {
    const mutante = await this.mutantesRepository.findBy({ nombre });
    if (mutante.length === 0) {
      throw new NotFoundException(`Mutante ${nombre} not found`);
    }
    return mutante;
  }

  async findOne(id: number) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    if (!mutante) {
      throw new NotFoundException(`Mutante ${id} not found`);
    }
    return mutante;
  }

  async findCiudad(ciudad_operacion: string) {
    const mutante = await this.mutantesRepository.findBy({ciudad_operacion});
    if (mutante.length === 0) {
      throw new NotFoundException(`Mutantes in ${ciudad_operacion} not found`);
    }
    return mutante;
  }

  async create(data: CreateMutanteDto) {
    const newMutante = this.mutantesRepository.create(data);
    if (data.superpodersIds) {
      const superpoderes = await this.superpoderesRepository.findBy({id: In(data.superpodersIds)});
      newMutante.superpoderes = superpoderes ;
    }
    if (data.vehiculosIds) {
      const vehiculos = await this.vehiculosRepository.findBy({id: In(data.vehiculosIds)});
      newMutante.vehiculos = vehiculos;
    }
    return this.mutantesRepository.save(newMutante);
  }

  async update(id: number, changes: Partial<UpdateMutanteDto>) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    this.mutantesRepository.merge(mutante, changes);
    return this.mutantesRepository.save(mutante);
  }

  async remove(id: number) {
    const mutante = await this.mutantesRepository.findOneBy({ id });
    if (!mutante.id) {
      throw new NotFoundException(`Mutante #${id} not found`);
    }
    return this.mutantesRepository.remove(mutante);
  }
}
