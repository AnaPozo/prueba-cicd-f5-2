import { CreateBeerDto } from './dto/create-beer.dto';
export declare class BeersService {
    _rndm(arr: any[]): number;
    _idGenerator(): string;
    create(createBeerDto: CreateBeerDto): {
        image_url: string;
        _id: string;
        name: string;
        tagline: string;
        first_brewed: string;
        description: string;
        attenuation_level: number;
        brewers_tips: string;
        contributed_by: string;
        expireAt: string;
        __v: number;
    };
    findAll(): {
        image_url: string;
        _id: string;
        name: string;
        tagline: string;
        first_brewed: string;
        description: string;
        attenuation_level: number;
        brewers_tips: string;
        contributed_by: string;
        expireAt: string;
        __v: number;
    }[];
    findOne(id: string): {
        image_url: string;
        _id: string;
        name: string;
        tagline: string;
        first_brewed: string;
        description: string;
        attenuation_level: number;
        brewers_tips: string;
        contributed_by: string;
        expireAt: string;
        __v: number;
    };
    findRandom(): {
        image_url: string;
        _id: string;
        name: string;
        tagline: string;
        first_brewed: string;
        description: string;
        attenuation_level: number;
        brewers_tips: string;
        contributed_by: string;
        expireAt: string;
        __v: number;
    };
}
