import React, { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from './Header'
import { useState } from 'react';
import { checkValidDate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();

    const userName = name.current.value;
    const userEmail = email.current.value
    const userPassword = password.current.value
    
    const message = checkValidDate(userEmail)
    setErrorMessage(message)
    if (message) return;
    
    // Sign In Sign Up Login
    
    if (!isSignForm) {
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          updateProfile(auth?.currentUser, {
            displayName: userName, photoURL: "https://avatars.githubusercontent.com/u/6759280?v=4"
          }).then(() => {
            name.current.value = ""
            email.current.value = ""
            password.current.value = ""
            navigate("/browse")
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          console.log(errorMessage);
        });
    }

    else {
      signInWithEmailAndPassword(auth, userEmail, userEmail)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage)
        });

    }
  }

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm)
  }

  return (
    <div>
      <Header />

      <div className='h-auto bg-login bg-no-repeat bg-cover bg-center'>
        <div className="w-full bg-black/60 flex flex-col justify-center min-h-screen">
          <form onSubmit={(e) => e.preventDefault()} action="" className='flex justify-center items-center'>
            <div className="bg-black/70 p-8 rounded-lg shadow-lg w-3/12">
              <h1 className="text-2xl font-semibold mb-6 text-gray-200">{isSignForm ? "Sign in" : "Sign up"}</h1>
              <form>
                {!isSignForm &&
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      ref={name}
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
                    ref={email}
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
                    ref={password}
                    required
                    className="w-full py-3 px-3 rounded focus:outline-none transition-all duration-300 focus:bg-zinc-900 text-gray-200 bg-zinc-800 placeholder:text-gray-500"
                  />
                </div>
                {errorMessage && <p className='text-red-500 my-3 text-sm'>{errorMessage}</p>}
                <div className="mb-6">
                  <button
                    onClick={handleButtonClick}
                    className="w-full bg-red-700 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {isSignForm ? "Sign in" : "Sign up"}
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