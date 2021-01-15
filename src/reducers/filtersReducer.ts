import { createSlice } from '@reduxjs/toolkit'
import { Filters } from '../types/Filters';

const initialState: Filters = {
    pageNumber: 1,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updatePageNumber(state, action) {
            state.pageNumber = action.payload;
        },
        reset(state, action) {
            state = initialState;
        }
    },
});

export const { updatePageNumber } = filtersSlice.actions;

export default filtersSlice.reducer;