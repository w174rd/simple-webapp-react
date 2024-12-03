import axios from "axios"
import { storageKey } from "../util/Config";


const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    timeout: 30000, // Timeout 30 detik
    headers: {
      'Content-Type': 'application/json',
    },
  });

// Request Interceptor
apiService.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(storageKey.USER_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Tangani error pada permintaan
      return Promise.reject(error);
    }
  );

// Response Interceptor
apiService.interceptors.response.use(
    (response) => {
      // handle response sukses
      return response.data;
    },
    (error) => {
      // Handle error pada response
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized, redirecting to login...');
        // Redirect ke halaman login (opsional)
        // window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );  
  

export default apiService