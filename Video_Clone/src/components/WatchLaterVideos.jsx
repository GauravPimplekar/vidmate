import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { likeVideoList } from '../store/VideoSlice';
import { getLikedVideoData, removeFromLike } from '../store/LikedVideoSlice';
import { getVideos } from '../store/WatchLater';
import ShowLikeVideo from './ShowLikeVideo';

const WatchLaterVideos = () => {
  const state = useSelector(state => state.watchLaterReducer.watchList);
  const { isLogin } = useSelector(state => state.authReducer);
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, [value])


  console.log(state);
  return (
    <>
      <div className='p-4'>
        <p className='text-4xl font-bold'>WATCH LATER</p>
        <hr className='bg-black h-1' />
      </div>
      <div>

        {
          isLogin == false ? <div>
            <p className='text-3xl flex justify-center w-full'>Login first to watch this section</p>
          </div>
            :
            state?.length == 0 && <div>
              <p className='text-3xl flex justify-center w-full'>Your watchlist is empty</p>
            </div>
        }


        {isLogin && state?.map(item => {
          return <ShowLikeVideo item={item} key={item.postId} type={"watchLater"} />
        })}

      </div>
    </>
  )
}

export default WatchLaterVideos
