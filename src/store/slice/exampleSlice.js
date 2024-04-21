import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "exampleStore",
  initialState: {
    example: null,
    // selectedStore: null,
    // adminStoreOptions: null,
  },
  reducers: {
    setExample: (state, action) => {
    
      state.example = action.payload;
    },
   
  } 
});

export const { setExample } = exampleSlice.actions;
export default exampleSlice; 
