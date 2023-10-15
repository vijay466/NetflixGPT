import { useState } from 'react'
import React from 'react'
import Header from './Header'

const Login = () => {
  
  const [isSignIn,setIsSignIn] = useState(true)
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div >
        <Header/>
        <div className= 'absolute' >
            <img src = 'https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt = 'logo'></img>
        </div>

        <form className = 'absolute p-12 bg-black w-4/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className = 'font-bold font-4xl py-3'>{isSignIn ? "Sign In ": "Sign Up"}</h1>
            {
             !isSignIn &&  <input className= 'p-4 my-3 w-full  bg-gray-700 rounded-md'type="text" placeholder="Full Name"></input> 
            }
            <input className= 'p-4 my-3 w-full  bg-gray-700 rounded-md'type="text" placeholder="Email Address "></input>
            <input  className= 'p-4 my-3 w-full  bg-gray-700 rounded-md' type="password" placeholder="Password"></input>

            <button className = 'p-4 my-3 bg-red-600 text-white w-full rounded-md h-full'>{isSignIn ? "Sign In ": "Sign Up"}</button>

            <p className = 'py-4 cursor-pointer' onClick = {toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login