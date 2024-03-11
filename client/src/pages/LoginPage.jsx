import React from 'react'
import LoginLayout from '../shared/components/Layouts/LoginLayout'
import LoginComponent from '../components/LoginComponent';


const LoginPage = () => {
  const handleLogin = (credentials) => {
    // Handle successful login, e.g., redirect to another page
    // Store authentication state (consider using Redux or local storage)
    console.log('Login successful:', credentials);
};
  return (
    <LoginLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-8">
                <h1>Login</h1>
                <LoginComponent onSubmit={handleLogin} />
            </div>  
        </div>
    </LoginLayout>
  )
}

export default LoginPage