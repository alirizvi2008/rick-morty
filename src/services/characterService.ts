import { CharacterApiResponse } from '../types/Character';

export const fetchCharacters = async (searchTerm: string): Promise<CharacterApiResponse> => {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 404) {
                return Promise.reject('error 404')
            }
        });
};
