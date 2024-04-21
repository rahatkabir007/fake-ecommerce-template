import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage";
import { api } from "./exampleapi";
import exampleStoreSlice from "./slice/exampleSlice";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["auth"], // Define slices that you don't want to persist (if any)
};

// const persistedReducer = persistReducer(persistConfig, adminStoreSlice.reducer); // Wrap your adminStore reducer with persistReducer

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // [Storeapi.reducerPath]: Storeapi.reducer,
    
    // adminStore: persistedReducer,
    // reportsFilter: reportsFilterSlice,
    exampleStore: exampleStoreSlice


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      // Storeapi.middleware,
     
    ),
});
export const persistor = persistStore(store); 
export default store;
