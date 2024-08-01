import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filterReduser } from "./filters/slice";
import { authReduser } from "./auth/slice";

export const  store =  configureStore({
    reducer: {
        contacts: contactsReduser,
        filters: filterReduser ,
        auth: authReduser,
    }
});
  
