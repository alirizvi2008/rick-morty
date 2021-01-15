import { createSlice } from '@reduxjs/toolkit'
import { ThemeTypes } from '../constants/ThemeTypes';

const initialState: string = ThemeTypes.Light;

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle(state) {
            return state === ThemeTypes.Dark ? ThemeTypes.Light : ThemeTypes.Dark;
        },
    },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;