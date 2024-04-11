import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { likeVideoList } from '../store/VideoSlice';
import { getLikedVideoData, removeFromLike } from '../store/LikedVideoSlice';
import ShowLikeVideo from './ShowLikeVideo';
import { checkIsLoginOrNot } from '../store/AuthenticationSlice';

const LikedVideo = () => {
  const state = useSelector(state => state.likedVideoReducer);
  const { isLogin } = useSelector(state => state.authReducer);
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikedVideoData());
    dispatch(checkIsLoginOrNot())
  }, [value])


  return (
    <>
      <div className='p-4'>
        <p className='text-4xl font-bold'>LIKED VIDEO</p>
        <hr className='bg-black h-1' />
      </div>
      <div>

        {isLogin == false ? <div className='flex-1'>
          <p className='text-3xl flex justify-center w-full'>Login first to watch this section</p>
        </div>
        :
        state?.likedVideo?.length == 0 && <div className='flex-1'>
          <p className='text-3xl flex justify-center w-full'>Your don't like any video yet</p>
        </div>}
        {isLogin && state?.likedVideo?.map(item => {
          return <ShowLikeVideo item={item} key={item.postId} />
        })}

      </div>
    </>
  )
}

export default LikedVideo
