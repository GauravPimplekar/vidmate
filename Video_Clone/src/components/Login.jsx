import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../store/AuthenticationSlice'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const state = useSelector(state => state.authReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state.isLogin);
    if (state.isLogin) {
      toast.success('Login successfully...', {
        position: "top-center",
        autoClose: 1000,

        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => {
          navigate("/")
        }
      });


    }


  }, [state])

  const loginFunction = (event) => {
    event.preventDefault();

    dispatch(loginUser(user));
    console.log(state);
  }

  return (
    <>
      <form className='p-8 bg-white bg-opacity-30  sm:w-96 items-center m-auto mt-28' onSubmit={(event) => loginFunction(event)}>
        <p className='w-full text-3xl text-center'>LOGIN</p>

        <div className='flex flex-col'>
          <label htmlFor="">Email</label>
          <input className='w-full h-10 p-4 rounded-xl' type="string" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Password</label>
          <input className='w-full h-10 p-4 rounded-xl' type="string" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
        </div>
        <Link to={"/singUp"} className='text-red-800'>Create new account</Link>
        <div className='flex flex-col mt-4'>
          <input className='w-full h-10 rounded-xl bg-red-700' type="submit" />
        </div>
      </form>
      <ToastContainer />

    </>
  )
}

export default Login
