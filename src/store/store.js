import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage";
import { api } from "./api";
import productSlice from "./slice/productSlice";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, productSlice.reducer); 

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    productStore: persistedReducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      // Storeapi.middleware,
     
    ),
});
export const persistor = persistStore(store); 
export default store;
