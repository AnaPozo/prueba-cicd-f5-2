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
exports.BeersController = void 0;
const common_1 = require("@nestjs/common");
const beers_service_1 = require("./beers.service");
const create_beer_dto_1 = require("./dto/create-beer.dto");
let BeersController = exports.BeersController = class BeersController {
    constructor(beersService) {
        this.beersService = beersService;
    }
    create(createBeerDto) {
        return this.beersService.create(createBeerDto);
    }
    findAll() {
        return this.beersService.findAll();
    }
    findRandom() {
        return this.beersService.findRandom();
    }
    findOne(id) {
        return this.beersService.findOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beer_dto_1.CreateBeerDto]),
    __metadata("design:returntype", void 0)
], BeersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeersController.prototype, "findRandom", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeersController.prototype, "findOne", null);
exports.BeersController = BeersController = __decorate([
    (0, common_1.Controller)('beers'),
    __metadata("design:paramtypes", [beers_service_1.BeersService])
], BeersController);
//# sourceMappingURL=beers.controller.js.map