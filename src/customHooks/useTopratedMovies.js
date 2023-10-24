import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // fetch data from tmdb api and update the store
  const dispatch = useDispatch();
  const getNowTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getNowTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
