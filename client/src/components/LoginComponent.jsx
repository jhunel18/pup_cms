import React from 'react'
import { useState } from 'react';
import { login } from '../services/LoginService';

const LoginComponent = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await login({ username, password });
            // Handle successful login based on your server's response
            console.log('Login successful:', data);
            onSubmit(data); // Pass response data to App.js (optional)
            setErrorMessage(null); // Clear error message on success
        
          } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Login failed. Please check your credentials.');
          }
    };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label htmlFor="username" className="text-sm font-medium">
                Username:
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <label htmlFor="password" className="text-sm font-medium">
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button type="submit" className="bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700">
                Login
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
  )
}

export default LoginComponent