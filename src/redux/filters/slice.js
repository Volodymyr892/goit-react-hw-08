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
export const filterReducer = filterSlice.reducer;