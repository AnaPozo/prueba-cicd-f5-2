"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeersService = void 0;
const common_1 = require("@nestjs/common");
const data = require("../../data/data.json");
const internal_server_error_exception_1 = require("@nestjs/common/exceptions/internal-server-error.exception");
let BeersService = exports.BeersService = class BeersService {
    _rndm(arr) {
        return Math.floor(Math.random() * arr.length);
    }
    _idGenerator() {
        const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    }
    ;
    create(createBeerDto) {
        const id = this._idGenerator();
        const newBeer = {
            _id: id,
            ...createBeerDto,
            image_url: '',
            expireAt: '',
            __v: 0,
        };
        if (typeof createBeerDto.attenuation_level
            !== 'number')
            throw new internal_server_error_exception_1.InternalServerErrorException();
        data.push(newBeer);
        return data.find((e) => e._id === id);
    }
    findAll() {
        return data;
    }
    findOne(id) {
        return data.find(elemento => elemento._id == id);
    }
    findRandom() {
        return data[this._rndm(data)];
    }
};
exports.BeersService = BeersService = __decorate([
    (0, common_1.Injectable)()
], BeersService);
//# sourceMappingURL=beers.service.js.map