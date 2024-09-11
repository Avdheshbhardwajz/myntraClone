import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const token = localStorage.getItem("Authorization");
console.log(token);
export const addItem = createAsyncThunk("addWishlist", async (item) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_LINK}/api/v1/wishlist/add`,
    item,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
});

export const getItem = createAsyncThunk("getWishlist", async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_LINK}/api/v1/wishlist/get/${id}`
  );
  return response.data;
});
export const deleteItem = createAsyncThunk("deleteWishlist", async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_LINK}/api/v1/wishlist/delete/${id}`
  );
  return response.data;
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(addItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(deleteItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default wishlistSlice.reducer;
