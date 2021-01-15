import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './reducers/charactersReducer';
import filtersReducer from './reducers/filtersReducer';
import themeReducer from './reducers/themeReducer';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        theme: themeReducer,
        filters: filtersReducer,
    },
});

export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;