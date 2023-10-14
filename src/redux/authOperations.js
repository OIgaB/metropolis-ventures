import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = '';

export const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} 

const dellToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
} 

export const signUpThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {    
        try {
            const { data } = await axios.post('/users/signup', credentials);
            if('token' in data) setToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }   
);

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => { 
        try{
            const { data } = await axios.post('/users/login', credentials)  
                if('token' in data) setToken(data.token) 
                return data; 
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try{
            await axios.post('/users/logout');
            dellToken();
        } catch (error){
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchCurrentUserThunk = createAsyncThunk( 
    'auth/current',
    async (_, thunkAPI) => { 
        const state = thunkAPI.getState(); 
        const persistedToken = state.auth.token;

        if (persistedToken === null) { 
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try{
            setToken(persistedToken); 
            const { data } = await axios.get('/users/current');
            return data; 
        } catch (error){
            return thunkAPI.rejectWithValue(error.response.data.message); 
        }
    }
);