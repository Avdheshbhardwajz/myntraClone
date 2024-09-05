// src/utils/axiosInstance.js
import axios from "axios";

// Create an axios instance with the base URL pointing to your backend API
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

// Add a request interceptor to include the auth token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
