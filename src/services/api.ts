
// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api"; // Update this with your actual backend URL

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add request interceptor to include token in all authenticated requests
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;


// import axios from 'axios';

// const BASE_URL = "http://localhost:5000/api";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       console.warn("No token found in localStorage");
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Request interceptor error:", error);
//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";
import { toast } from "@/components/ui/use-toast";

// Update this with the correct backend URL
const BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include token in all authenticated requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  response => response,
  error => {
    const status = error.response ? error.response.status : null;
    
    if (status === 401) {
      // Clear local storage and redirect to login if unauthorized
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      toast({
        title: "Session expired",
        description: "Your session has expired. Please log in again.",
        variant: "destructive",
      });
      
      // Only redirect if we're not already on the login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;
