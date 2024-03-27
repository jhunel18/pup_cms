import React from 'react'
import LoginLayout from '../shared/components/Layouts/LoginLayout'
import LoginForm from '../components/LoginForm';


const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login successful:', credentials);
};
  return (
    <LoginLayout>
        {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-8">
                <h1>Login</h1>
                <LoginComponent onSubmit={handleLogin} />
            </div>  
        </div> */}
        <div className='flex w-full h-screen'>
          <div className='w-full flex items-center justify-center'>
            <LoginForm onSubmit={handleLogin}/>
          </div>
          {/* <div className='hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200'>
            <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full' />
          </div> */}
        </div>
    </LoginLayout>
  )
}

export default LoginPage