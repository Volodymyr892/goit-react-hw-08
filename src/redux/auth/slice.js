import { createSlice } from "@reduxjs/toolkit";

import { login, logout, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user:{
            name: null,
            email: null,
        },
    token: null,
    isLoggedIn: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
            state.isLoading = false;
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn =true;
            })
            .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = false;
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn =true;
            })
            .addCase(login.rejected, (state)=>{
                state.isLoading = false;
                state.error = true;
            })
            .addCase(logout.pending, ( state)=>{
                state.isLoading = true;
                state.error = false;
            })
            .addCase(logout.fulfilled, (state)=> {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected,  ( state)=>{
                state.isLoading = true;
                state.error = false;
            })
        }
});
export const authReduser =authSlice.reducer;