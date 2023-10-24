import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-5">
      <h1 className="text-xl font-semibold px-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="relative flex items-center">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
