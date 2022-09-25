import { CreateMutanteDto, UpdateMutanteDto } from 'src/mutantes/dtos/mutante.dto';
import { MutantesService } from 'src/mutantes/services/mutantes.service';
export declare class MutantesController {
    private mutantesService;
    constructor(mutantesService: MutantesService);
    getMutantes(): Promise<import("../entities/mutante.entity").Mutante[]>;
    getName(name: string): Promise<import("../entities/mutante.entity").Mutante[]>;
    getCiudad(ciudad_operacion: string): Promise<import("../entities/mutante.entity").Mutante[]>;
    create(payload: CreateMutanteDto): Promise<import("../entities/mutante.entity").Mutante>;
    update(id: number, payload: UpdateMutanteDto): Promise<import("../entities/mutante.entity").Mutante>;
    delete(id: number): Promise<import("../entities/mutante.entity").Mutante>;
}
