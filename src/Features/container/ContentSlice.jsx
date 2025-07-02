import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EnterprisesIndex: 0,
};

const ContentSlice = createSlice({
  name: "Contents",
  initialState,
  reducers: {
    playSlide: (state, action) => {
      state.EnterprisesIndex = action.payload;
    },
  },
});

export const { playSlide } = ContentSlice.actions;

export default ContentSlice.reducer;
