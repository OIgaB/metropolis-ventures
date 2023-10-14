import { createSlice } from "@reduxjs/toolkit";
import { getAllObjects, getObjectsPerPage, getObjectByID } from './carsOperations';

const initialState = { 
    allItems: [],  
    itemsPerPage: [],
    itemById: {},
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledGotAll = (state, { payload }) => {  
    state.isLoading = false;
    state.allItems = payload;
}

const handleFulfilledGotPerPage = (state, { payload }) => {  
    state.isLoading = false;
    state.itemsPerPage = [...state.itemsPerPage, ...payload];
}

const handleFulfilledGotByID = (state, { payload }) => {
    state.isLoading = false;
    state.itemById = payload;
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const objectsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllObjects.fulfilled, handleFulfilledGotAll)
            .addCase(getObjectsPerPage.fulfilled, handleFulfilledGotPerPage)
            .addCase(getObjectByID.fulfilled, handleFulfilledGotByID)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const objectsReducer = objectsSlice.reducer;