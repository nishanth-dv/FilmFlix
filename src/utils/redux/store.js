import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./storeSlices/userSlice";
import nowPlayingSlice from "./storeSlices/nowPlayingSlice";
import otherMovieSlice from "./storeSlices/otherMovieSlice";
import gptSlice from "./storeSlices/gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    nowPlaying: nowPlayingSlice,
    otherCategories: otherMovieSlice,
    gpt: gptSlice,
  },
});

export default store;
