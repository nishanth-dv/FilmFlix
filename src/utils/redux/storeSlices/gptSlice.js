import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: true,
    showingFallback: false,
    movieNames: null,
    movieList: null,
  },
  reducers: {
    toggleView: (state) => {
      state.showGpt = !state.showGpt;
    },
    setShowingFallback: (state, action) => {
      state.showingFallback = action.payload;
    },
    addMovieNames: (state, action) => {
      state.movieNames = action.payload;
    },
    addMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { toggleView, setShowingFallback, addMovieNames, addMovieList } =
  gptSlice.actions;

export default gptSlice.reducer;
