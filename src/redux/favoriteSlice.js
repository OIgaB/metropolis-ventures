import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteObjects: [],
    },
    reducers: {
        addToFavorite: (state, { payload }) => {
            state.favoriteObjects = [...state.favoriteObjects, payload];
            // or state.favoriteObjects.push(payload);
        },

        removeFromFavorite(state, { payload }) {
            const index = state.favoriteObjects.findIndex(car => car.id === payload);
            state.favoriteObjects.splice(index, 1); 
        }, // or state.favoriteObjects.filter((car) => car.id !== action.payload);
    }, 
});

const persistConfig = {
    key: 'favorite',
    storage,
}


export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = persistReducer(persistConfig, favoriteSlice.reducer);