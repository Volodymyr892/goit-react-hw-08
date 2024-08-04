import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

export const register = createAsyncThunk("auth/register", 
    async (newUser, thunkAPI)=> {
        try {
            const response = await axios.post("/users/signup", newUser)
            return response.data
        } catch (error) {
            return  thunkAPI.rejectWithValue(error.mesagge)
        }
    });