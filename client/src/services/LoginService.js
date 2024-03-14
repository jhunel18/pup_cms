import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:3000';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { token } = response.data;
    Cookies.set('auth_token', token, { expires: 7 });

    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
