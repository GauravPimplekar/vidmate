import {createSlice} from "@reduxjs/toolkit"
import { likeVideoList } from "./VideoSlice";

const initialState = {
  likedVideo : []
}


const LikedVideoSlice = createSlice({
  name:"likedVideo",
  initialState,
  reducers:{
    getLikedVideoData:(state)=>{
      let data = JSON.parse(localStorage.getItem("currUser"));
      data = data.likedVideo;
      console.log(data);
      state.likedVideo = data;
    },
    removeFromLike: (state,action) =>{
      let data = JSON.parse(localStorage.getItem("currUser"));
      let user = data;
      data = data.likedVideo

      let newData = data.filter(item =>{
        return item.postId != action.payload;
      })

      localStorage.setItem("currUser", JSON.stringify({...user, likedVideo : newData}));

      state.likedVideo = newData;
    }
  }
})


export default LikedVideoSlice.reducer;
export const {getLikedVideoData, removeFromLike}  = LikedVideoSlice.actions;