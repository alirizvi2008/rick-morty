import { NameUrl } from './Character';

export interface Episode extends NameUrl {
    id: number;
    air_date: string;
    episode: string;
}