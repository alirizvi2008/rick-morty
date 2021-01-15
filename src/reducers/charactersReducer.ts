import { createSlice } from '@reduxjs/toolkit'
import { Character, Info } from '../types/Character'

export interface CharacterState {
    loading: boolean;
    error: boolean;
    data: Character[];
    info?: Info;
}

const initialState: CharacterState = {
    loading: true,
    error: false,
    data: [],
    info: undefined,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        appendCharacters: (state, action) => {
            state.data = state.data.concat(action.payload.results);
            state.info = action.payload.info;
            state.loading = false;
            state.error = false;
        },
        replaceCharacters: (state, action) => {
            state.data = action.payload.results;
            state.info = action.payload.info;
            state.loading = false;
            state.error = false;
        },
        getCharactersFailure: state => {
            state.error = true;
            state.loading = false;
            state.data = initialState.data;
            state.info = initialState.info;
        },
        getCharacters: state => {
            state.loading = true;
            state.error = false;
        },
    },
});

export const { appendCharacters, replaceCharacters, getCharactersFailure, getCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;