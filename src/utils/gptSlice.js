import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    goButtonState: false,
    gptMovies: null,
    movieResult: null,
  },

  reducers: {
    buttonClicked: (state) => {
      state.goButtonState = true;
    },
    removeButtonClicked: (state) => {
      state.goButtonState = false;
    },
    addGptMovieResult: (state, action) => {
      const { movieResult, gptMovies } = action.payload;
      state.gptMovies = gptMovies;
      state.movieResult = movieResult;
    },
    removeGptMoviesAndMovieResults: (state) => {
      state.gptMovies = null;
      state.movieResult = null;
    },
  },
});
export const {
  buttonClicked,
  removeButtonClicked,
  addGptMovieResult,
  removeGptMoviesAndMovieResults,
} = gptSlice.actions;

export default gptSlice.reducer;
