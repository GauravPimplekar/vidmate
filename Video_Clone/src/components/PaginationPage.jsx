import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import {useDispatch} from "react-redux"
import { fetchData } from '../store/VideoListSlice';

const PaginationPage = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);

  useEffect(()=>{
    dispatch(fetchData(page));
  }, [page])


  return (
    <div className='flex justify-center my-10'>
      <Pagination
        count={9}
        color='primary'
        onChange={(e,value)=> setPage(value)}
        className='text-white'
      >
      </Pagination>
    </div>
  )
}

export default PaginationPage
