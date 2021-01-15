import { CharacterStatus } from '../constants/CharacterStatus';

export interface Character extends NameUrl {
    id: number;
    status: CharacterStatus;
    species: string;
    type: string;
    gender: string;
    origin: NameUrl;
    location: NameUrl;
    image: string;
    episode: string[];
    created: Date;
}

interface NameUrl {
    name: string;
    url: string;
}

export interface Info {
    count: number;
    next: string;
    pages: number;
}

export interface CharacterApiResponse {
    info: Info;
    results: Character[];
}