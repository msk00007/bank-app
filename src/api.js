
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-backend-api.com', // Replace with your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
