import { configureStore } from "@reduxjs/toolkit"; // this will help us to configure the dataSto

import cartReducer from "../store/cartSlice";
import wishlistReducer from "../store/wishlistSlice";
//here is the store and the data we are going to store in the store

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
