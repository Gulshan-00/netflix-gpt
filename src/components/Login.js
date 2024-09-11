import React, { useState } from 'react'
import Header from './Header'
import { useRef } from 'react';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate=useNavigate();
  const dispatch= useDispatch();
    
    //states
    const [isSignInForm, setIsSignInForm]=useState(true); //for form toggle
    const [errorMessage, setErrorMessage]=useState(null); //to print on the signin and signup page 

    const name=useRef(null);
    const email =useRef(null);
    const password =useRef(null);

    const handleButtonClick=()=>{
        console.log(email.current.value)
        console.log(password.current.value)
      const message=checkValidateData(email.current.value,password.current.value)
      setErrorMessage(message);
       
      if(message) return;
      //signin and signup logic
      if(!isSignInForm){
          //code for the sign up
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential)=>{
        //signin
        const user=userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/90376979?v=4"
        }).then(() => {
             
          const {uid,email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email, displayName:displayName, photoURL:photoURL}))

          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message)
        });
        console.log(user)
       
        


      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        setErrorMessage(errorCode+"-"+errorMessage)

      })
      }else{
        //code for the sign in 
        
        
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
                        
            console.log(user)
            navigate("/browse");
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // setErrorMessage(errorCode+"-"+errorMessage)
            if(errorCode || errorMessage) 
            {
              setErrorMessage("User not Found")
            }
          });
 


      }

    };

const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
}

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img className='brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg' alt='bg-img'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='relative top-[100px] w-4/12 m-auto bg-black bg-opacity-70 rounded-md'>
            <div className='text-white flex justify-center items-center flex-col p-9 pb-[180px]'>
            <h1 className='text-4xl pb-4 mr-[180px] font-extrabold'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input ref={name} className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="text" name="name" id="name" placeholder='Full name'/>}
            
            <input ref={email} className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="text" name="email" id="Email" placeholder='Email or phone number'/>
            <input ref={password} className='border border-gray-600 bg-transparent px-[50px] m-3 p-3 rounded-md' type="password" name="password" id="Password" placeholder='Password' />
            <p className='text-red-700 font-bold'>{errorMessage}</p>
            
            <button className='px-[125px] m-3 p-2 bg-red-600 text-white rounded-md' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
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