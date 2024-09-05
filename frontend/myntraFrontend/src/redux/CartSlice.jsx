import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state for the cart slice
const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Redux slice for cart management
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      state.items = state.items.map((item) =>
        item._id === _id ? { ...item, quantity } : item
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Actions
export const {
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// Async thunk for fetching cart items
export const fetchCartItems = () => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const response = await axios.get("/Cart/getCart"); // Use the correct endpoint
    if (Array.isArray(response.data)) {
      dispatch(fetchCartSuccess(response.data));
    } else {
      throw new Error("Invalid data format");
    }
  } catch (error) {
    dispatch(fetchCartFailure("Failed to fetch cart items"));
  }
};

// Async thunk for adding an item to the cart
export const addItemToCart = (item) => async (dispatch) => {
  try {
    await axios.post("/Cart/add", item); // Use the correct endpoint
    dispatch(fetchCartItems()); // Re-fetch cart items to update the state
  } catch (error) {
    dispatch(fetchCartFailure("Failed to add item to cart"));
  }
};

// Async thunk for removing an item from the cart
export const removeItemFromCart = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`/Cart/remove/${itemId}`); // Use the correct endpoint
    dispatch(removeFromCart(itemId));
  } catch (error) {
    dispatch(fetchCartFailure("Failed to remove item from cart"));
  }
};

// Async thunk for updating item quantity in the cart
export const updateItemQuantity = (item, newQuantity) => async (dispatch) => {
  try {
    await axios.put(`/Cart/update/${item._id}`, { quantity: newQuantity }); // Use the correct endpoint
    dispatch(updateQuantity({ _id: item._id, quantity: newQuantity }));
  } catch (error) {
    dispatch(fetchCartFailure("Failed to update item quantity"));
  }
};

// Async thunk for clearing the cart
export const clearCartItems = () => async (dispatch) => {
  try {
    await axios.delete("/Cart/clear"); // Use the correct endpoint
    dispatch(clearCart());
  } catch (error) {
    dispatch(fetchCartFailure("Failed to clear cart"));
  }
};

export default cartSlice.reducer;
