import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedSearch: (state, action) => {
      // state= Object.assign(state,action.payload)
      state = Object.assign(state, action.payload);
    },
  },
});
export const { cachedSearch } = searchSlice.actions;
export default searchSlice.reducer;
