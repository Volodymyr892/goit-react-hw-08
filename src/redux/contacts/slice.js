import { createSlice } from "@reduxjs/toolkit";

const contactSlisce = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoding: false,
        error: null,
    },
    extraReducers: {
        
    }
})
export const contactsReduser = contactSlisce.reducer;