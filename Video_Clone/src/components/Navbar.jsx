import React, { useEffect, useState } from 'react'
import { MdSlowMotionVideo } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoMdSend } from 'react-icons/io';
import { BiLike } from 'react-icons/bi';
import { MdWatchLater } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import "./navbar.css";
import {useSelector, useDispatch} from "react-redux"
import { checkIsLoginOrNot, logoutUser } from '../store/AuthenticationSlice';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const state = useSelector(state => state.authReducer)
  const dispatch = useDispatch();
  console.log(state.isLogin);
  useEffect(()=>{
    dispatch(checkIsLoginOrNot());

  },[])

  const logoutFunction = ()=>{
    if(state.isLogin){
      dispatch(logoutUser());
    }
    else{
      navigate("/login");
    }

    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex justify-between items-center p-4 top-0 z-50 h-[70px] bg-white bg-opacity-60 fixed w-full'>
      <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/")}>
        <MdSlowMotionVideo size={35} />
        <p>VIDMATE</p>
      </div>

      <ul className={`lg:flex justify-between items-center absolute ${isOpen ? "right-0" : "right-[-150px]"} lg:top-0 top-[70px] lg:bg-opacity-0 bg-opacity-60 bg-white p-2 lg:h-[70px] h-[100vh] lg:right-0`}>
        <li>
          <NavLink to={"/"} onClick={()=> setIsOpen(!isOpen)} className='flex flex-col items-center cursor-pointer'>
            <IoHomeOutline className='' size={35} />
            <p>HOME</p>
          </NavLink>
        </li>
        <li className='lg:ml-10 my-4 lg:my-0'>
          <NavLink to={`/likedVideo`} onClick={()=> setIsOpen(!isOpen)} className='flex flex-col items-center cursor-pointer'>
            <BiLike size={35} />
            <p>LIKED VIDEOS</p>
          </NavLink>
        </li>
        <li className='lg:ml-10 my-4 lg:my-0'>
          <NavLink to={"/watchLater"} onClick={()=> setIsOpen(!isOpen)} className='flex flex-col items-center cursor-pointer'>
            <MdOutlineWatchLater size={35} />
            <p>WATCH LATER</p>
          </NavLink>
        </li>
        <li className='lg:ml-10 my-4 lg:my-0'>
          <div onClick={() => logoutFunction()} className='flex flex-col items-center cursor-pointer'>
            <CgProfile size={35} />
            <p>{state.isLogin ? "LOGOUT" : "LOGIN"}</p>
          </div>
        </li>
      </ul>

      <ul className='lg:hidden'>
        <li>
          {isOpen ? <div className='flex flex-col items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <GiCancel size={35} />
            <p>CANCEL</p>
          </div> : <div className='flex flex-col items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu size={35} />
            <p>MENU</p>
          </div>}
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
