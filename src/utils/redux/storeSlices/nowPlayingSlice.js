import { createSlice } from "@reduxjs/toolkit";

const nowPlaying = createSlice({
  name: "nowPlayingMovies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerKey } = nowPlaying.actions;

export default nowPlaying.reducer;
