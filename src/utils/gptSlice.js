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
  },
});
export const { buttonClicked, removeButtonClicked, addGptMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;
