import React from 'react'
import {useDispatch} from "react-redux"
import { removeFromLike } from '../store/LikedVideoSlice';
import { removeFromWatchList } from '../store/WatchLater';

const ShowLikeVideo = ({item, type}) => {
  const dispatch = useDispatch();

  const removeFunction = ()=>{
    
    if(type == "watchLater"){
      console.log(type);
      dispatch(removeFromWatchList(item));
    }
    else{
      dispatch(removeFromLike(item.postId));
    }
  }
  return (
    <div className='sm:flex  m-6 border-2 p-4 bg-white bg-opacity-20' key={item.postId}>
      <img src={item.submission.thumbnail} alt="" className='h-72 w-full sm:w-72 rounded-xl' />
      <div className='m-2 w-full'>

        <div className='sm:flex justify-between items-center sm:px-4 w-full'>

          <div className='flex'>
            <img src={item.creator.pic} alt="" className='h-20 w-20 rounded-full' />
            <div className='ml-2'>
              <p>{item.submission.title}</p>
              <p>{item.creator.name}</p>
            </div>
          </div>

          <div>
            <button className='bg-red-500 mt-4 sm:mt-0 text-white py-2 px-4 rounded-xl' onClick={() => removeFunction()}>Remove</button>
          </div>


        </div>

        <p className='sm:px-4'>{item.submission.description}</p>
      </div>
    </div>
  )
}

export default ShowLikeVideo
