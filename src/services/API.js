import apiService from "./APIService";


const api = {
    login: (data) => apiService.post('/api/v1/auth/login', data),
    register: (data) => apiService.post('/api/v1/auth/register', data),
    getUsers: () => apiService.get(`/api/v1/users`),
    getUserById: (id) => apiService.get(`/api/v1/users/${id}`),
    updateUser: (id, data) => apiService.put(`/api/v1/users/${id}`, data),
    deleteUser: (id) => apiService.delete(`/api/v1/users/${id}`),
  };
  
  export default api;