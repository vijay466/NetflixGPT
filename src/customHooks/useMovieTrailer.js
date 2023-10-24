import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constansts";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();
  // fetch trailer video and updating the store with trailer video

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailers ? filterTrailers[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
