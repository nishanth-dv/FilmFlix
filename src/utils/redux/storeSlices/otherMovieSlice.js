import { createSlice } from "@reduxjs/toolkit";

const otherMovieSlice = createSlice({
  name: "otherMovies",
  initialState: {
    otherMovies: {},
  },
  reducers: {
    addOtherMovies: (state, action) => {
      state.otherMovies[action.payload.category] = action.payload.movies;
    },
  },
});

export const { addOtherMovies } = otherMovieSlice.actions;
export default otherMovieSlice.reducer;
