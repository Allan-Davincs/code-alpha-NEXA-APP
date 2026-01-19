import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('nexaToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
