import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNowPopularMovies = () => {
  const navigate = useNavigate();
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const dispatch = useDispatch();
  // fetch data from tmdb api and update the store
  const getNowPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (err) {
      navigate("/errorPage");
    }
  };

  useEffect(() => {
    !popularMovies && getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;
