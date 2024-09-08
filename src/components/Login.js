import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm]=useState(true);

const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img className='brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg' alt='bg-img'/>
        </div>
        <form className='relative top-[100px] w-4/12 m-auto bg-black bg-opacity-70 rounded-md'>
            <div className='text-white flex justify-center items-center flex-col p-9 pb-[180px]'>
            <h1 className='text-4xl pb-4 mr-[180px] font-extrabold'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="text" name="name" id="name" placeholder='Full name'/>}
            <input className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="text" name="Email" id="Email" placeholder='Email or phone number'/>
            <input className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="text" name="Password" id="Password" placeholder='Password' />
            <button className='px-[125px] m-3 p-2 bg-red-600 text-white rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <h2 className='text-gray-500 font-extrabold'> OR</h2>
            <button className='px-[80px] m-3 p-2 bg-gray-400 bg-opacity-30 text-white rounded-md'>Use a sign-in code</button>
            <h2 className= 'font-extrabold'>Forgot password?</h2>
            <p className='mt-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to netflix? sign up now":"Already registered? sign in now"}</p>
            </div>
        </form>
    </div>
  );
};

export default Login;