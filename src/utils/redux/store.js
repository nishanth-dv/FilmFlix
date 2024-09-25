import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./storeSlices/userSlice";
import nowPlayingSlice from "./storeSlices/nowPlayingSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    nowPlaying: nowPlayingSlice,
  },
});

export default store;
