import {createSlice} from "@reduxjs/toolkit"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState={
  currUser:{},
  isLogin: false,
  isSingup : false
}

const AuthenticationSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    createUser(state,action){
      let users = JSON.parse(localStorage.getItem("users")) || [];
      console.log(action.payload);
      let createUser = users.find(item => action.payload.email == item.email);

      if(!createUser){
        localStorage.setItem("users", JSON.stringify([action.payload, ...users]));
        state.isSingup = true;
      }
      else{
        state.isSingup = false;
        alert("user already exist")
      }
    },
    setIsSignup(state){
      state.isSingup = false;
    },
    loginUser(state,action){
      let users = JSON.parse(localStorage.getItem("users")) || [];

      let loginUser = users.find(item =>{ 
        return item.email == action.payload.email && item.password == action.payload.password;
      })

      if(loginUser){
        
        localStorage.setItem("currUser", JSON.stringify(loginUser));
        state.isLogin = true;
      }
      else{
        toast.error('user not exist', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    },
    logoutUser(state){
      let currUser = JSON.parse(localStorage.getItem("currUser"));
      let data = JSON.parse(localStorage.getItem("users"));
      
      let newData = data.filter(item => item.email != currUser.email);

      localStorage.setItem("users",JSON.stringify([currUser, ...newData]))

      localStorage.setItem("currUser", JSON.stringify({}));

      state.isLogin = false;
    },
    checkIsLoginOrNot(state){
      let data = JSON.parse(localStorage.getItem("currUser")) || {};

      if(data.email){
        state.isLogin = true;
      }
      else{
        state.isLogin = false;
      }
    }
  }
})


export default AuthenticationSlice.reducer;
export const {createUser, loginUser, logoutUser,checkIsLoginOrNot, setIsSignup} = AuthenticationSlice.actions;