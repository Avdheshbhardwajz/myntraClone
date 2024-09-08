// src/api.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_API;

const API_URL = import.meta.env.VITE_API_LINK;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
// src/api.js

export const fetchProductById = async (id) => {
  try {
    const token = localStorage.getItem("Authorization"); // Get the token
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`,
      {
        headers: {
          Authorization: `${token}`, // Set the token in the Authorization header
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    throw error;
  }
};

export const addToCart = async (product) => {
  try {
    const token = localStorage.getItem("Authorization"); // Get the token
    const response = await axios.post(
      `${API_URL}/api/v1/cart/add`,
      {
        product,
      },
      {
        headers: {
          Authorization: `${token}`, // Set the token in the Authorization header
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const token = localStorage.getItem("Authorization"); // Get the token
    const response = await axios.delete(`${API_URL}/api/v1/cart/clear`, {
      headers: {
        Authorization: `${token}`, // Set the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error clearing the cart:", error);
    throw error;
  }
};

export const deleteFromCart = async (productId) => {
  try {
    const token = localStorage.getItem("Authorization"); // Get the token
    const response = await axios.delete(
      `${API_URL}/api/v1/cart/delete/${productId}`,
      {
        headers: {
          Authorization: `${token}`, // Set the token in the Authorization header
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting from cart:", error);
    throw error;
  }
};
