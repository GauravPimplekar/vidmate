import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex items-center justify-center w-full py-4 text-2xl mt-auto text-white'>
      <FaRegCopyright/>
      <p className='ml-2 '>create and built by Gaurav | all copyright reserver</p>
    </div>
  )
}

export default Footer
