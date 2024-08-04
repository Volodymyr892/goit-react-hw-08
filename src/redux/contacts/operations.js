import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI)=>{
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (contact,thunkAPI)=>{
        try {
            const response = await axios.post("/contacts",contact)
            console.log("🚀 ~ response:", response)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async(contactId, thunkAPI)=>{
        try {
            const response = await axios.delete(`/delete/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

