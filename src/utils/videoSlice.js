import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videoList",
  initialState: {
    initialVideos: {},
    searchResults: {},
  },
  reducers: {
    LoadVideos: (state, action) => {
      state.initialVideos = action.payload;
    },
    searchVideoResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { LoadVideos, searchVideoResults } = videoSlice.actions;
export default videoSlice.reducer;
