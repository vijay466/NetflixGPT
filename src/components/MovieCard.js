import React from "react";
import { IMG_CDN_URL } from "../utils/constansts";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-[185px] inline-block p-2 cursor-pointer hover:scale-100 ease-in-out duration-300 ">
      <img alt="movie_card" src={IMG_CDN_URL + posterpath} />
    </div>
  );
};

export default MovieCard;
