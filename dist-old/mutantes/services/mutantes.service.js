"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mutante_entity_1 = require("../entities/mutante.entity");
const typeorm_2 = require("typeorm");
let MutantesService = class MutantesService {
    constructor(mutantesRepository) {
        this.mutantesRepository = mutantesRepository;
    }
    findAll() {
        return this.mutantesRepository.find();
    }
    async findName(nombre) {
        const mutante = await this.mutantesRepository.findBy({ nombre });
        if (mutante.length === 0) {
            throw new common_1.NotFoundException(`Mutante ${nombre} not found`);
        }
        return mutante;
    }
    async findCiudad(ciudad_operacion) {
        const mutante = await this.mutantesRepository.findBy({ ciudad_operacion });
        if (mutante.length === 0) {
            throw new common_1.NotFoundException(`Mutantes in ${ciudad_operacion} not found`);
        }
        return mutante;
    }
    create(data) {
        const newMutante = this.mutantesRepository.create(data);
        return this.mutantesRepository.save(newMutante);
    }
    async update(id, changes) {
        const mutante = await this.mutantesRepository.findOneBy({ id });
        this.mutantesRepository.merge(mutante, changes);
        return this.mutantesRepository.save(mutante);
    }
    async remove(id) {
        const mutante = await this.mutantesRepository.findOneBy({ id });
        if (!mutante.id) {
            throw new common_1.NotFoundException(`Mutante #${id} not found`);
        }
        return this.mutantesRepository.remove(mutante);
    }
};
MutantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mutante_entity_1.Mutante)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MutantesService);
exports.MutantesService = MutantesService;
//# sourceMappingURL=mutantes.service.js.map