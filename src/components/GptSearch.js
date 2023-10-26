import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

import ShimmerList from "./ShimmerList";

const GptSearch = () => {
  const { movieResult, gptMovies } = useSelector((store) => store.gpt);

  if (!gptMovies || !movieResult) {
    // Display shimmer while data is loading
    return (
      <div className="text-white bg-black p-5  md:p-14 md:px-24 my-52 mx-auto left-0 right-0 absolute">
        <div className="flex overflow-x-auto flex-wrap scrollbar-hide">
          <ShimmerList count={10} />
          <ShimmerList count={10} />
          <ShimmerList count={10} />
          <ShimmerList count={10} />
        </div>
      </div>
    );
  }

  return (
    <div className="text-white bg-black p-12 my-40 mx-auto left-0 right-0 absolute">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearch;
