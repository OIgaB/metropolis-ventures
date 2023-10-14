import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filterLocation: '',
        investmentValue: '',
        sharePrice: '',
        yield: '',       
    },
    reducers: {
        getFilterData: (state, { payload }) => {
            state.filterLocation = payload.filterLocation;
            state.investmentValue = payload.investmentValue;
            state.sharePrice = payload.sharePrice;
            state.yield = payload.yield;     
        },
    },
});

const persistConfig = {
    key: 'filter',
    storage,
}

export const { getFilterData } = filterSlice.actions;
export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);

// investment value: $ 6 500 000
// share price: $ 60 000 
// Yield: 9,25%
// Days left: 150
// Shares sold: 75%