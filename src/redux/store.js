import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/slice";
// import { filterReducer } from "./filters/slice";
import { authReduser } from "./auth/slice";

export const  store =  configureStore({
    reducer: {
        // contacts: contactsReducer,
        // filters: filterReducer ,
        auth: authReduser,
    }
});
  
