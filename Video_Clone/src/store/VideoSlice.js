import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  video: {},
  comment: {}
};

const VideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    selectVideo(state, action) {
      //to add selected video in localstorage
      localStorage.setItem("video", JSON.stringify(action.payload));

    },
    getSingleVideo(state) {
      //to add like video in database
      let arr = JSON.parse(localStorage.getItem("currUser"));
      let user = arr;
      arr = arr.likedVideo;
      let currVideo = JSON.parse(localStorage.getItem("video"));

      let newVideo = arr.find(item => item.postId == currVideo.postId);

      if (newVideo) {
        state.video = newVideo;
      }
      else {
        state.video = currVideo;
      }

      let commentList = JSON.parse(localStorage.getItem("comments")) || [];

      let comment = commentList.find(item => item.postId == currVideo.postId);

      if (comment) {

        state.comment = comment;
      }
      else {
        state.comment = {
          postId: currVideo.postId,
          comemnts: []
        };
      }

      return state;
    },
    likeVideoList(state, action) {
      let arr = JSON.parse(localStorage.getItem("currUser"));
      let user = arr;
      arr = arr.likedVideo
      let currVideo = JSON.parse(localStorage.getItem("video"));
      let newVideo = arr.find(item => item?.postId == currVideo?.postId);

      
      if (newVideo) {
        let newArray = arr.filter(item => {
          return item.postId != currVideo.postId
        })
        state.video = currVideo;
        // console.log("hi",currVideo);
        localStorage.setItem("currUser", JSON.stringify({...user, likedVideo : newArray}));
      }
      else {
        state.video = currVideo;
        currVideo.reaction.count = currVideo.reaction.count + 1;
        currVideo.reaction.voted = !currVideo.reaction.voted;
        let currVideoList = JSON.parse(localStorage.getItem("currUser")).likedVideo;
        currVideoList.unshift(currVideo)

        
        localStorage.setItem("currUser", JSON.stringify({...user, likedVideo : currVideoList}));
      }



    },
    addComment(state, action) {
      let commentList = JSON.parse(localStorage.getItem("comments")) || [];
      let currVideo = JSON.parse(localStorage.getItem("video"));
      let comment = commentList.find(item => item.postId == currVideo.postId);
      let newCommentList = commentList.filter(item => {
        return item.postId != currVideo.postId
      })

      if (comment) {
        comment.comments.unshift(action.payload.input);

        state.comment = comment;
        localStorage.setItem("comments", JSON.stringify([...newCommentList, { postId: currVideo.postId, comments: [...comment.comments] }]));
        
      }
      else {
        let obj = {
          postId: currVideo.postId,
          comments: [action.payload.input]
        }
        
        commentList.push(obj);
        state.comment = obj;
        localStorage.setItem("comments", JSON.stringify([...newCommentList, obj]));
      }

    }
  }
})


export default VideoSlice.reducer;
export const { getSingleVideo, selectVideo, likeVideoList, addComment } = VideoSlice.actions;