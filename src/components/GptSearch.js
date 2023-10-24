import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearch = () => {
  const { movieResult, gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;

  return (
    <div className="text-white bg-black  p-12 my-40 mx-auto left-0 right-0 absolute">
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
