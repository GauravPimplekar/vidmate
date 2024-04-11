import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  videoList : [],
  isLoading : true,
};

export const fetchData = createAsyncThunk(
  "fetchData",
  async(pageNo)=>{
    let resp = await axios.get(`https://internship-service.onrender.com/videos?page=${pageNo}`)
    console.log(resp);
    return resp.data.data.posts;
  }
)


const VideoListSlice = createSlice({
  name:"videoList",
  initialState,
  reducers:{},
  extraReducers: (builder)=>{
    builder.addCase(fetchData.fulfilled, (state, action)=>{
      state.videoList = action.payload;
      state.isLoading = false;
    }),
    builder.addCase(fetchData.pending, (state)=>{
      state.isLoading = true;
    }),
    builder.addCase(fetchData.rejected, (state)=>{
      state.isLoading = false;
    })
  }
})


export default VideoListSlice.reducer;
export const {getVideoList} = VideoListSlice.actions;