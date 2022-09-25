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
exports.MutantesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const parse_int_pipe_1 = require("../../../common/parse-int.pipe");
const mutante_dto_1 = require("../../dtos/mutante.dto");
const mutantes_service_1 = require("../../services/mutantes.service");
let MutantesController = class MutantesController {
    constructor(mutantesService) {
        this.mutantesService = mutantesService;
    }
    getMutantes() {
        return this.mutantesService.findAll();
    }
    getName(name) {
        return this.mutantesService.findName(name);
    }
    getCiudad(ciudad_operacion) {
        return this.mutantesService.findCiudad(ciudad_operacion);
    }
    create(payload) {
        return this.mutantesService.create(payload);
    }
    update(id, payload) {
        return this.mutantesService.update(id, payload);
    }
    delete(id) {
        return this.mutantesService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "getMutantes", null);
__decorate([
    (0, common_1.Get)('nombre/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "getName", null);
__decorate([
    (0, common_1.Get)('cuidad_operacion/:ciudad_operacion'),
    __param(0, (0, common_1.Param)('ciudad_operacion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "getCiudad", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mutante_dto_1.CreateMutanteDto]),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, mutante_dto_1.UpdateMutanteDto]),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MutantesController.prototype, "delete", null);
MutantesController = __decorate([
    (0, swagger_1.ApiTags)('mutantes'),
    (0, common_1.Controller)('mutantes'),
    __metadata("design:paramtypes", [mutantes_service_1.MutantesService])
], MutantesController);
exports.MutantesController = MutantesController;
//# sourceMappingURL=mutantes.controller.js.map