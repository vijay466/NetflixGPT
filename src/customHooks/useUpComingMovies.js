import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const useUpComingMovies = () => {
  // fetch data from tmdb api and update the store
  const navigate = useNavigate()
  const upComingMovies = useSelector((store) => store.movies?.upComingMovies);
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
   try {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
   }catch(err) {
    navigate('/errorPage')
   }
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
