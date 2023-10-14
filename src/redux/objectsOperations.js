import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// axios.defaults.baseURL = 'https://649088271e6aa71680cb6b00.mockapi.io/';

export const getAllObjects = createAsyncThunk(
    'objects/getAllObjects',
    async (_, { rejectWithValue}) => { 
        try {
            const { data } = await axios.get('/objects');
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
            return sortedByName; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getObjectsPerPage = createAsyncThunk(
    'objects/getObjects',
    async (page, { rejectWithValue}) => { 
        try {
            const limit = 8; 
            const { data } = await axios.get('/objects', {
                params: {
                  page,
                  limit,
                },
            });
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
            return sortedByName; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getObjectByID = createAsyncThunk(
    'objects/getObject',
    async (id, { rejectWithValue}) => { 
        try {
            const { data } = await axios.get(`/objects?id=${id}`);
            return data[0];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);