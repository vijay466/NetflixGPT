import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPopularMovies = () => {
  // fetch data from tmdb api and update the store

  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;
