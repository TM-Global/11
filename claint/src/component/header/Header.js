import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContxt } from '../../contextApi/AuthContext';
import toast from 'react-hot-toast';
import './Header.css'
const Header = () => {
  const {user,logOut} = useContext(myContxt)
  const naviget = useNavigate()

  const handleLogout = () =>{
    logOut()
   .then(()=> {
    toast.success('Successfully Logout!')
    naviget('/')
   })
   .catch((err)=> toast.error(`${err.message}`))
  }

 
    return (
        <div className=' bg-zinc-800 drop-shadow text-lime-50'>
    <div className="navbar flex justify-between  m-auto w-10/12">
      <div className="navbar-start sm:navbar-end text-3xl sm:block font-semibold md:block">Dream PhotoGraphy</div>  
  <div className="navbar-start z-10 md:hidden">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact custome_style dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link className='mx-2 text-blue-900 font-semibold' to ='/'> Home </Link>
       <Link className='mx-2 text-blue-900 font-semibold' to ='/services'> Services </Link>
       {
       
       user?.uid ?
      <>
       <Link className='mx-2 text-blue-900 font-semibold' to ='/Myreviews'> My reviews </Link>
       <Link className='mx-2 text-blue-900 font-semibold' to ='/Addservice'> Add service </Link>
       <button className='bt2 text-blue-900 btn-warning' onClick={handleLogout}>logout</button>
      </>
      : 
      <Link className='mx-2 text-blue-900 font-semibold' to ='/Login'>  Login </Link>
       }
      </ul>
    </div>

  </div>

  <div className="navbar-end sm:hidden hidden md:block">
    <ul className='text-xl menu_ul'>
       <Link className='mx-2 font-semibold' to ='/'> Home </Link>
       <Link className='mx-2 font-semibold' to ='/services'> Services </Link>
       {
       
       user?.uid ?
      <>
       <Link className='mx-2 font-semibold' to ='/Myreviews'> My reviews </Link>
       <Link className='mx-2 font-semibold' to ='/Addservice'> Add service </Link>
       <button className='btn btn-warning' onClick={handleLogout}>logout</button>
      </>
      : 
      <Link className='mx-2 font-semibold' to ='/Login'>  Login </Link>
       }
     
       
    </ul>
  </div>
</div>
</div>
    );
};

export default Header;