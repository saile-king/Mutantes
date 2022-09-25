import { CreateMutanteDto, UpdateMutanteDto } from 'src/mutantes/dtos/mutante.dto';
import { MutantesService } from 'src/mutantes/services/mutantes/mutantes.service';
export declare class MutantesController {
    private mutantesService;
    constructor(mutantesService: MutantesService);
    getMutantes(): any;
    getName(name: string): any;
    getCiudad(ciudad_operacion: string): any;
    create(payload: CreateMutanteDto): any;
    update(id: number, payload: UpdateMutanteDto): any;
    delete(id: number): any;
}
