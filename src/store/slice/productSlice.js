import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productStore",
  initialState: {
    categoryList: null,
    cart: [], 
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.cart.includes(itemId)) {
        state.cart.push(itemId);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((id) => id !== itemId);
    },
  },
});

export const { setCategoryList, addToCart, removeFromCart } = productSlice.actions;
export default productSlice;
