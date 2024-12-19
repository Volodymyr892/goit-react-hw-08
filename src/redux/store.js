import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReduser } from "./auth/slice";


  const persisteAuthdReducer = persistReducer( {
    key: "auth-token",
    storage,
    whitelist: ["token"],
  }, 
  authReduser
);

export const  store =  configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        auth: persisteAuthdReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
  }),
});
  
export const persistor = persistStore(store);