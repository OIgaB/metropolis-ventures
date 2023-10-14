import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { objectsReducer } from './objectsSlice';
import { filterReducer } from './filterSlice';
import { favoriteReducer } from './favoriteSlice';
import storage from 'redux-persist/lib/storage';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'; 


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],  
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        objects: objectsReducer,
        filter: filterReducer,
        favorite: favoriteReducer,
    },
    middleware(getDefaultMiddleware){  //middleware - прослойка, яка стоїть між відправкою action-а і його доставкою в reducer, і дозволяє щось змінити в цей проміжок
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //щоб не видавало помилку заігноримо декілька action-ів - функцій, щоб Redux на них не реагував
            }, // action - серіалізована сутність, тобто коли можна зробити JSON.stringify - там не повинно бути ф-цій
        });
    },
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);