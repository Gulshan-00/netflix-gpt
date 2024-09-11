import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Header = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
 const user=useSelector(store=>store.user);

  const handleButton=()=>{

    signOut(auth).then(() => {
      // dispatch(removeUser());
      navigate("/")
    }).catch((error) => {
      //we need to build the error page
      navigate("/error")
    });

  }

  return (
    <div className='absolute z-10 w-full flex justify-between bg-gradient-to-b from-black '>
        <img className='w-[200px] rounded-lg' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='img'/>
        
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