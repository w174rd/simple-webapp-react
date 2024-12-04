import axios from "axios"
import { storageKey } from "../util/Config";


const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API,
    timeout: 30000, // Timeout 30 detik
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.REACT_APP_API_KEY
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
      if (error.response) {
        const { data, status } = error.response;
        const errorMessage = data?.message || 'Terjadi kesalahan'; // Default jika tidak ada 'message'
  
        console.error(`Error ${status}: ${errorMessage}`);
  
        if (status === 401) {
          console.error('Unauthorized, redirecting to login...');
          // window.location.href = '/login';
        }
  
        // Tambahkan pesan error ke objek error
        return Promise.reject({
          code: data?.code,
          status: data?.status,
          message: errorMessage 
        });
      }
  
      // Jika tidak ada response, kemungkinan network error
      console.error('Network error:', error.message);
      return Promise.reject({
        code: 1,
        status: 'error',
        message: 'Network bermasalah, silahkan coba lagi nanti',
      });
    }
  );  
  

export default apiService