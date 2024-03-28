import React from 'react'
import LoginLayout from '../shared/components/Layouts/LoginLayout'
import LoginComponent from '../components/LoginComponent';


const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login successful:', credentials);
};
  return (
    <LoginLayout>
        <div className='flex w-full h-screen'>
          <div className='w-full flex items-center justify-center'>
            <LoginComponent onSubmit={handleLogin}/>
          </div>
        </div>
    </LoginLayout>
  )
}

export default LoginPage