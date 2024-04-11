import React, { useEffect } from 'react'
import { selectVideo } from '../store/VideoSlice';
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { checkIsLoginOrNot } from '../store/AuthenticationSlice';

const HomeVideo = ({item}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state.authReducer.isLogin)

  useEffect(()=>{
    dispatch(checkIsLoginOrNot());
  },[])
  const selectVideoFunction = (value) => {
    if(state){
      dispatch(selectVideo(value));
      navigate("/singleVideo")
    }
    else{
      alert("login first to see the video")
    }
  }
  return (
    <div key={item.postId} className='rounded-xl relative' onClick={() => selectVideoFunction(item)}>
      <img src={item.submission.thumbnail} alt="" className='h-96 rounded-xl w-full' />
      <div className='p-2 flex absolute bottom-0 rounded-b-xl bg-black bg-opacity-45 w-full hover:h-full hover:rounded-xl hover:flex-col hover:justify-center hover:items-center'>
        <img src={item.creator.pic} alt="" className='h-16 w-16 rounded-full' />
        <div className='ml-2'>
          <h3 className='text-3xl text-white font-bold'>{item.submission.title}</h3>
          <p className='text-gray-300'>{item.creator.name}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeVideo
