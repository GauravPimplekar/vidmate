import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {selectVideo} from "./store/VideoSlice"
import Navbar from './components/Navbar'
import VideoList from './components/VideoList'
import PaginationPage from './components/PaginationPage'

function App() {
  

  return(
    <div>
      <VideoList />
      <PaginationPage />
    </div>
    
  )
}

export default App
