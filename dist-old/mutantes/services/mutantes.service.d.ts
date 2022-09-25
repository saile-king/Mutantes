import { CreateMutanteDto, UpdateMutanteDto } from 'src/mutantes/dtos/mutante.dto';
import { Mutante } from 'src/mutantes/entities/mutante.entity';
import { Repository } from 'typeorm';
export declare class MutantesService {
    private readonly mutantesRepository;
    constructor(mutantesRepository: Repository<Mutante>);
    findAll(): Promise<Mutante[]>;
    findName(nombre: string): Promise<Mutante[]>;
    findCiudad(ciudad_operacion: string): Promise<Mutante[]>;
    create(data: CreateMutanteDto): Promise<Mutante>;
    update(id: number, changes: Partial<UpdateMutanteDto>): Promise<Mutante>;
    remove(id: number): Promise<Mutante>;
}
