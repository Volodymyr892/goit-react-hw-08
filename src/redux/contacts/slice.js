// import { createSlice } from "@reduxjs/toolkit";
// import { addContacts, deleteContact, fetchContacts } from "./operations";

// const contactSlisce = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },
//     extraReducers: builder => {
//         builder
//         .addCase(fetchContacts.pending, (state) => {
//             state.isLoading = true;
//             })
//         .addCase(fetchContacts.fulfilled,(state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//             })
//         .addCase(fetchContacts.rejected, (state, action) => {
//             state.isLoading = false;
//             state.error = action.payload;
//             })
//         .addCase(addContacts.pending, (state) => {
//             state.isLoading = true;
//             state.error = false;
//             })
//         .addCase(addContacts.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items.push(action.payload);
//             })
//         .addCase(addContacts.rejected, (state) => {
//             state.isLoading = false;
//             state.error = true;
//             })
//         .addCase(deleteContact.pending,(state) => {
//             state.isLoading = true;
//             })
//         .addCase(deleteContact.fulfilled, (state,action)=>{
//             state.loading = false;
//             state.error = false;
//             state.items =state.items.filter(item => item.id !== action.payload.id);
//             })
//         .addCase(deleteContact.rejected, (state) => {
//             state.loading = false;
//             state.error = true;
//             })
//     }
// });
// export const contactsReducer = contactSlisce.reducer;