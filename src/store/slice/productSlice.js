import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productStore",
  initialState: {
    categoryList: null,
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
   
  } 
});

export const { setCategoryList } = productSlice.actions;
export default productSlice; 
