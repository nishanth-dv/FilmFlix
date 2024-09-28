import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./storeSlices/userSlice";
import nowPlayingSlice from "./storeSlices/nowPlayingSlice";
import otherMovieSlice from "./storeSlices/otherMovieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    nowPlaying: nowPlayingSlice,
    otherCategories: otherMovieSlice,
  },
});

export default store;
