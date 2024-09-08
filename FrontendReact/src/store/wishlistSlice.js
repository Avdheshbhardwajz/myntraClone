import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (exist) {
        return state;
      }
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
