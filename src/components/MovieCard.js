import React from "react";
import { IMG_CDN_URL } from "../utils/constansts";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="md:w-[177px] w-[163px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300">
      <img
        className="rounded-lg "
        alt="movie_card"
        src={IMG_CDN_URL + posterpath}
      />
    </div>
  );
};

export default MovieCard;
