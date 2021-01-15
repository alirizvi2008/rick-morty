import { CharacterStatus } from '../constants/CharacterStatus'
export interface Filters {
    pageNumber: number;
    status?: CharacterStatus;
}