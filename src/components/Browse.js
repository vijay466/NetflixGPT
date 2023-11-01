import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import useNowPopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopratedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";

const Browse = () => {
  const goButtonState = useSelector((store) => store.gpt.goButtonState);
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <div className="bg-black w-screen h-screen">
        {goButtonState ? (
          <GptSearch />
        ) : (
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
