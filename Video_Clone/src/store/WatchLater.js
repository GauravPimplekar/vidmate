import {createSlice, isActionCreator} from "@reduxjs/toolkit";


const initialState = {
  watchList : [],
  isAvailable : false,
}

const WatchLater = createSlice({
  name:"watchLater",
  initialState,
  reducers:{
    addToWatchLater(state, action){
      let user = JSON.parse(localStorage.getItem("currUser"));
      let data = user.watchList || [];

      let checkIsAvailable = data.find(item => action.payload.postId == item.postId);
      let currVideo = JSON.parse(localStorage.getItem("video"));

      if(!checkIsAvailable){
        localStorage.setItem("currUser", JSON.stringify({...user, watchList : [action.payload, ...data]}));
      }
      else{
        let newData = data.filter(item =>{
          return currVideo.postId != item.postId;
        })
        localStorage.setItem("currUser", JSON.stringify({...user, watchList: newData}));

      }
      
    },
    checkAvailabeData(state, action){
      let user = JSON.parse(localStorage.getItem("currUser"));
      let data = user.watchList || [];
      let currVideo = JSON.parse(localStorage.getItem("video"));
      let checkIsAvailable = data.find(item => item.postId == currVideo.postId);

      console.log(data, "hi")
      if(checkIsAvailable){
        state.isAvailable = true;
      }
      else{
        state.isAvailable = false;
      }
      
    },
    getVideos(state){
      let user = JSON.parse(localStorage.getItem("currUser"));
      let data = user.watchList || [];
      state.watchList= data;
    },
    removeFromWatchList(state,action){
      let user = JSON.parse(localStorage.getItem("currUser"));
      let data = user.watchList || [];
      let currVideo = action.payload;

      let newData = data.filter(item =>{
        return item.postId != currVideo.postId
      })

      console.log(user,currVideo,data);

      state.watchList = newData;
      localStorage.setItem("currUser", JSON.stringify({...user, watchList : newData}))
    }
  }
})


export default WatchLater.reducer;
export const {addToWatchLater,checkAvailabeData, getVideos, removeFromWatchList} =  WatchLater.actions