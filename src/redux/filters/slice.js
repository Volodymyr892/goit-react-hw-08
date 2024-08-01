import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        name: '',
        number: '',
    },
    reducers: {
        
    }
})
export const filterReduser = filterSlice.reducer;