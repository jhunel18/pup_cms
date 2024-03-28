import React from "react";
import { useState } from "react";
import { AuthenticationService } from '../services/AuthenticationService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginComponent = ({onSubmit}) => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await AuthenticationService.login({ email, password });
      // Handle successful login based on your server's response
      console.log('Login successful');
      onSubmit(data); // Pass response data to App.js (optional)
      toast.success('Login successful'); // Display success toast
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.'); // Display error toast
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
    <Toaster position="top-center" /> {/* Add Toaster component */}
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details
      </p>
      <div className="mt-8 ">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            id="email"
            value={email}
            onChange={handleUsernameChange}
            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
            placeholder="Enter your Password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2 font-medium text-base">
              Remember Me
            </label>
          </div>
          <button className="font-medium text-base text-blue-500">
            Forgot Password
          </button>
        </div>
      </div>
      <div className="mt-8">
        <button 
        className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-full rounded-md py-3 bg-violet-500 text-white text-lg font-bold"
        onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
