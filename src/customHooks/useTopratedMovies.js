import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useTopRatedMovies = () => {
  // fetch data from tmdb api and update the store

  const topRatated = useSelector((store) => store.movies?.topRatedMovies);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getNowTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addTopRatedMovies(json.results));
    } catch (err) {
      navigate("/errorPage");
    }
  };

  useEffect(() => {
    !topRatated && getNowTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
