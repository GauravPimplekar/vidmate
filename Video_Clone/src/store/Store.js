import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./VideoSlice"
import videoListReducer from "./VideoListSlice"
import likedVideoReducer from "./LikedVideoSlice";
import watchLaterReducer from "./WatchLater"
import authReducer from "./AuthenticationSlice"

const Store = configureStore({
  reducer:{
    videoReducer,
    videoListReducer,
    likedVideoReducer,
    watchLaterReducer,
    authReducer,
  }
})

export default Store;