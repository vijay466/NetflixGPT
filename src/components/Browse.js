import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />

      {/*

        - main container
           videoBackground
        - secondary container
          - movie list * N
              - card * N
     */}

      <MainContainer />

      <SecondaryContainer />
    </div>
  );
};

export default Browse;
