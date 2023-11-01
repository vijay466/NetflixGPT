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
      <div className="-mt-10 md:-mt-64 relative z-20 pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies}
          id="No-playing-slider"
        />
        <MovieList title={"Top Rated"} movies={topRated} id="TopRated-slider" />
        <MovieList title={"Popular"} movies={popular} id="Popular-slider" />

        <MovieList
          title={"Upcoming Movies"}
          movies={upComing}
          id="Upcoming-slider"
        />
        <MovieList title={"Horror"} movies={movies} id="Horror-slider" />
      </div>
    </div>
  );
};

export default SecondaryContainer;
