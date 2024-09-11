import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state of the cart
const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Retrieve token from local storage
const token = localStorage.getItem("Authorization");

// Add item to cart
export const addItem = createAsyncThunk("cart/addItem", async (item) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_LINK}/api/v1/cart/add`,
    item,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

// Get cart items
export const getItem = createAsyncThunk("cart/getItem", async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_LINK}/api/v1/cart/get/${id}`
  );
  return response.data;
});

// Delete item from cart
export const deleteItem = createAsyncThunk("cart/deleteItem", async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_LINK}/api/v1/cart/delete/${id}`
  );
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItem.fulfilled, (state, action) => {
        const newItem = action.payload;
        // Check if item already exists in the cart
        const existingItemIndex = state.items.findIndex(
          (item) => item.productId === newItem.productId
        );

        if (existingItemIndex >= 0) {
          // If item exists, update quantity
          state.items[existingItemIndex].quantity += newItem.quantity;
        } else {
          // Otherwise, add the new item
          state.items.push(newItem);
        }
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.productId !== action.meta.arg
        );
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default cartSlice.reducer;
