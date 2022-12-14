import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  mySpace: null, //f4
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.mySpace = action.payload.mySpace; //f4
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.mySpace = null; //f4
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.mySpace = action.payload.mySpace;
    },
    // F4: Delete story from MySpace
    deleteStorySuccess: (state, action) => {
      const storyId = action.payload;
      state.mySpace.stories = state.mySpace.stories.filter(
        (story) => story.id !== storyId
      );
    },
    // F5: Post a new story
    postNewStorySuccess: (state, action) => {
      state.mySpace.stories.push(action.payload);
    },
    //f6:update story in editspaceform
    spaceUpdated: (state, action) => {
      state.mySpace = { ...action.payload, stories: state.mySpace.stories };
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  deleteStorySuccess,
  postNewStorySuccess,
  spaceUpdated,
} = userSlice.actions;

export default userSlice.reducer;
