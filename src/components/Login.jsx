import React from 'react'
import Header from './Header'
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isSignForm, setIsSignForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm)
  }

  return (
    <div>
      <Header />

      <div className='h-auto bg-login bg-no-repeat bg-cover bg-center'>
        <div className="w-full bg-black/60 flex flex-col justify-center min-h-screen">
          <form action="" className='flex justify-center items-center'>
            <div className="bg-black/70 p-8 rounded-lg shadow-lg w-3/12">

              <h1 className="text-2xl font-semibold mb-6 text-gray-200">{isSignForm ? "Sign in" : "Sign up"}</h1>
              <form onSubmit={handleSubmit}>
                {!isSignForm && 
                <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder='Full Name'
                  className="w-full py-3 px-3 rounded focus:outline-none transition-all duration-300 focus:bg-zinc-900 text-gray-200 bg-zinc-800 placeholder:text-gray-500"
                />
              </div>
                }
                <div className="mb-4">

                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder='Email address'
                    className="w-full py-3 px-3 rounded focus:outline-none transition-all duration-300 focus:bg-zinc-900 text-gray-200 bg-zinc-800 placeholder:text-gray-500"
                  />
                </div>
                <div className="mb-4">

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full py-3 px-3 rounded focus:outline-none transition-all duration-300 focus:bg-zinc-900 text-gray-200 bg-zinc-800 placeholder:text-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="text-gray-500 text-xs flex gap-2">
                New to Netflix?{' '}
                <p onClick={toggleSignInForm} className="text-red-400 hover:underline">
                  {isSignForm ? "Sign up now." : "Already a user"}
                </p>
              </p>
              <p className="text-gray-500 text-xs mt-2">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                <p className="text-red-400 hover:underline">
                  Learn more.
                </p>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login