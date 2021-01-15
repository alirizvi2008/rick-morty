import { createReducer } from '@reduxjs/toolkit';
import { error, success } from '../actions/episodeActions';
import { Episode } from '../types/Episode';

export interface EpisodeState {
    loading: boolean;
    error: boolean;
    data: Episode[];
}

export const episodeState: EpisodeState = {
    loading: true,
    error: false,
    data: [],
};

export const episodeReducer = createReducer(episodeState, {
    [error.toString()]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];

    },
    [success.toString()]: (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
    }
});