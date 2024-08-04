import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"


export const register = createAsyncThunk("auth/register", 
    async (newUser, thunkAPI)=> {
        try {
            const response = await axios.post("/users/signup", newUser)
           axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}}`
            return response.data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.mesagge)
        }
    });
export const login = createAsyncThunk ("auth/login",
    async (creads, thunkAPI)=>{
        try {
            const response = await axios.post("/users/login", creads)
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}}`
            return response.data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.mesagge)
        }
    
    })

export const logout = createAsyncThunk( "auth/logout",
    async (_, thunkAPI)=>{
        try {
            const response = await axios.post("/users/logout")
          axios.defaults.headers.common.Authorization = " ";
            return response.data;
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.mesagge)
        }
    }
)
