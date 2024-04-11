import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { selectVideo } from '../store/VideoSlice'
import { fetchData, getVideoList } from '../store/VideoListSlice'
import { RiH1 } from 'react-icons/ri'
import HomeVideo from './HomeVideo'
import Loading from './Loading'

const VideoList = () => {
  const state = useSelector(state => state.videoListReducer);
  return (
    <>
      {state.isLoading ? <Loading /> :
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 sm:px-12 lg:px-16 justify-around'>
          {state.videoList.map(item => {
            return <HomeVideo item={item} key={item.postId} />
          })}
        </div>
      }
    </>
  )
}

export default VideoList
