import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateVehiculoDto, UpdateVehiculoDto } from '../dtos/vehiculo.dto';
import { Vehiculo } from '../entities/vehiculo.entity';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo) private vehiculoRepo: Repository<Vehiculo>,
  ) {}

  findAll() {
    return this.vehiculoRepo.find();
  }

  async findOne(id: number) {
    const vehiculo = this.vehiculoRepo.findOneBy({ id });
    if (!vehiculo) {
      throw new NotFoundException(`Vehiculo #${id} not found`);
    }
    return vehiculo;
  }

  create(data: CreateVehiculoDto) {
    const newCategory = this.vehiculoRepo.create(data);
    return this.vehiculoRepo.save(newCategory);
  }

  async update(id: number, changes: UpdateVehiculoDto) {
    const vehiculo = await this.findOne(id);
    this.vehiculoRepo.merge(vehiculo, changes);
    return this.vehiculoRepo.save(vehiculo);
  }

  remove(id: number) {
    return this.vehiculoRepo.delete(id);
  }
}
