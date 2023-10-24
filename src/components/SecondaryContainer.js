import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const upComing = useSelector((store) => store.movies?.upComingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Popular"} movies={popular} />

        <MovieList title={"Upcoming Movies"} movies={upComing} />
        <MovieList title={"Horror"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
