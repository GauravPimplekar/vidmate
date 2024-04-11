import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { createUser } from '../store/AuthenticationSlice'
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const [user, setUser] = useState({username:"",email:"",password:"",watchList:[],likedVideo:[]});
  const state = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(state);
    state.isSingup && navigate('/login')
  },[state])

  console.log(state);
  const SingUpUser = (event)=>{
    event.preventDefault();
    console.log(user);
    dispatch(createUser(user));

    
    setUser({username:"",email:"",password:"",watchList:[],likedVideo:[]})
  }

  return (
    <form className='p-8 bg-white bg-opacity-30  sm:w-96 items-center m-auto mt-28' onSubmit={(event)=> SingUpUser(event)}>
      <p className='w-full text-3xl text-center'>SING_UP</p>
      <div className='flex flex-col'>
        <label htmlFor="">Username</label>
        <input className='w-full h-10 p-4 rounded-xl' type="string" placeholder="Username" required value={user.username} onChange={(e)=> setUser({...user, username: e.target.value})} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="">Email</label>
        <input className='w-full h-10 p-4 rounded-xl' type="email" placeholder="Email" required value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="">Password</label>
        <input className='w-full h-10 p-4 rounded-xl' type="password" placeholder="Password" required value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/>
      </div>
      <Link to={"/login"} className='text-red-800'>Have account</Link>
      <div className='flex flex-col mt-4'>
        <input className='w-full h-10 rounded-xl bg-red-700' type="submit" />
      </div>
    </form>
  )
}

export default SignUp
