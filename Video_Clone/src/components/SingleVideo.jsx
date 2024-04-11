import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { IoMdSend } from "react-icons/io";
import Navbar from './Navbar';
import { addComment, getSingleVideo, likeVideoList } from '../store/VideoSlice';
import { BiLike } from "react-icons/bi";
import { MdWatchLater } from 'react-icons/md';
import { addToWatchLater, checkAvailabeData } from '../store/WatchLater';


const SingleVideo = () => {
  const [comment, setComment] = useState("");
  const [like, setLike]= useState(false);
  const item = useSelector(state => state.videoReducer.video);
  const commentList = useSelector(state => state.videoReducer.comment.comments) || [];
  const state = useSelector(state => state.watchLaterReducer.isAvailable)
  const dispatch = useDispatch();

  console.log(item,state);
  useEffect(()=>{
    dispatch(getSingleVideo());
    dispatch(checkAvailabeData());
  },[like])



  const addScrollFunction = ()=>{
    dispatch(addComment({postId: item.postId, input: comment}));
    let box = document.getElementById("addScroll");
    box.scrollTop = 400
  }

  const likeFunction = ()=>{
    setLike(!like)
    dispatch(likeVideoList())
  }

  

  const addTowatchList = () => {
    dispatch(addToWatchLater(item));
    dispatch(checkAvailabeData());
  }


  return (
    <>
    <div className='flex flex-col justify-around px-0 md:px-4 lg:flex-row'>
    <div className='lg:w-full lg:mr-4 bg-white mb-8 bg-opacity-50'>
      <video controls src={item?.submission?.mediaUrl} className='sm:h-[500px] w-[100%] h-[300px] bg-black bg-opacity-40'></video>
      <div className='my-2 flex p-2'>
        <img src={item?.creator?.pic} alt="" className='h-16 w-16 rounded-full' />
        <div className='ml-2'>
          <div className='flex w-full justify-between items-center'>
          <div>
          <h3 className='text-3xl font-bold'>{item?.submission?.title}</h3>
          <p className='text-gray-800'>{item?.creator?.handle}</p>
          
          </div>
          <div className='flex'>
          <div className={`mr-4 flex flex-col items-center cursor-pointer p-2 rounded-xl ${item?.reaction?.voted == false ? "bg-white bg-opacity-50 text-black" : "bg-red-700 text-white"}`} onClick={()=> likeFunction()}>
            <BiLike size={20}/>
            <p>{item?.reaction?.count} LIKE</p>
          </div>
          <div className={`mr-4 flex flex-col items-center cursor-pointer p-2 rounded-xl ${state == false ? "bg-white bg-opacity-50" : "bg-red-700 text-white"}`} onClick={()=> addTowatchList()}>
            <MdWatchLater size={20}  />
            <p>WATCH LATER</p>
          </div>
          </div>
          </div>
          <p>{item?.submission?.description}</p>
        </div>
      </div>
    </div>

    <div className='h-[500px] lg:w-[500px] w-full bg-gray-200 rounded-xl flex flex-col justify-between p-4 bg-opacity-40'>
        <div className='h-[400px] overflow-y-scroll flex flex-col-reverse' id='addScroll' style={{scrollbarWidth:"thin"}}>
          {commentList.map((item, index) =>{
            return(
              <p key={index} className='w-full px-4 py-2 rounded-xl text-gray-600 bg-white my-2 break-words' >{item}</p>
            )
          })}
        </div>
        <div className='flex flex-row justify-evenly'>
          <input type="text" placeholder='Add a comment...' onChange={(e)=> setComment(e.target.value)} className='h-12 w-5/6 px-4 text-lg rounded-full' />
          <button onClick={()=> addScrollFunction()} className='h-12 flex justify-center items-center w-12 rounded-full bg-green-700'>
            <IoMdSend className='text-white' size={28} />
          </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default SingleVideo
