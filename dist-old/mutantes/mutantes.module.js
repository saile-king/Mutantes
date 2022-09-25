"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutantesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mutantes_controller_1 = require("./controllers/mutantes.controller");
const mutantes_service_1 = require("./services/mutantes.service");
const mutante_entity_1 = require("./entities/mutante.entity");
const superpoder_controller_1 = require("./controllers/superpoder.controller");
const superpoder_entity_1 = require("./entities/superpoder.entity");
const superpoder_service_1 = require("./services/superpoder.service");
let MutantesModule = class MutantesModule {
};
MutantesModule = __decorate([
    (0, common_1.Module)({
        controllers: [mutantes_controller_1.MutantesController, superpoder_controller_1.SuperpoderController],
        providers: [mutantes_service_1.MutantesService, superpoder_service_1.SuperpoderService],
        imports: [typeorm_1.TypeOrmModule.forFeature([mutante_entity_1.Mutante, superpoder_entity_1.Superpoder])],
        exports: [typeorm_1.TypeOrmModule, mutantes_service_1.MutantesService],
    })
], MutantesModule);
exports.MutantesModule = MutantesModule;
//# sourceMappingURL=mutantes.module.js.map