"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_beer_dto_1 = require("./create-beer.dto");
class UpdateBeerDto extends (0, mapped_types_1.PartialType)(create_beer_dto_1.CreateBeerDto) {
}
exports.UpdateBeerDto = UpdateBeerDto;
//# sourceMappingURL=update-beer.dto.js.map