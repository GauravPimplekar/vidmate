import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleVideo from './components/SingleVideo.jsx'
import {Provider} from "react-redux";
import Store from "./store/Store.js"
import PaginationPage from './components/PaginationPage.jsx'
import Navbar from './components/Navbar.jsx'
import LikedVideo from './components/LikedVideo.jsx'
import WatchLaterVideos from './components/WatchLaterVideos.jsx'
import Auth from './components/Auth.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={Store}>
    <Navbar /> 
    <div  className='h-[100%] w-[100%] pt-[75px] box-border min-h-[100vh] flex flex-col'>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/singleVideo' element={<SingleVideo />}/>
      <Route path='/likedVideo' element={<LikedVideo/>} />
      <Route path='/watchLater' element={<WatchLaterVideos />} />
      <Route path='/auth' element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path='/singUp' element={<SignUp/>} />
    </Routes>
    <Footer />
    </div>
    
    </Provider>
    
  </BrowserRouter>
)
