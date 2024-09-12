import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

 const user=useSelector(store=>store.user);

  const handleButton=()=>{

    signOut(auth).then(() => {
    }).catch((error) => {
      //we need to build the error page
      navigate("/error")
    });

  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid,email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      return ()=>unsubscribe();
}, []);

  return (
    <div className='absolute z-10 w-full flex justify-between bg-gradient-to-b from-black from-0%'>
        <img className='w-[200px] rounded-lg' src={NETFLIX_LOGO} alt='img'/>
        
        { user && <div className='flex m-5 justify-center items-center gap-2'>
        <div>
          <img  className='w-12 cursor-pointer rounded-full' src={user?.photoURL} alt="img" />
        </div>
        <div>
        <button className='z-11 p-1 px-2 hover:bg-red-700 text-white bg-red-600 rounded-lg' onClick={handleButton}>Sign out</button>
        </div>
        </div>}
    </div>
  )
}

export default Header