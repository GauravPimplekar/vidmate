import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <CircularProgress size={180} />
      </div>
  )
}

export default Loading
