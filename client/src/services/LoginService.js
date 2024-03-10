import axios from 'axios';

export const login = async (credentials) => {
  try {
    const response = await axios.post('/auth', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};