import { createSlice } from "@reduxjs/toolkit"; //importing slice for the reducers

const initialState = {
  items: [], //since the cart state can have different thins like items total price and lots of thats why we are usuing object as a initial state
};

const cartSlice = createSlice({
  name: "cart", // here we are giving a name to our cart data  ,
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
