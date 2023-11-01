import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies, id }) => {
  const [scrollable, setScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = scrollPosition - 1000;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = scrollPosition + 1000;
  };

  useEffect(() => {
    const slider = document.getElementById(id);
    if (slider) {
      const isScrollable = slider.scrollWidth > slider.clientWidth;
      setScrollable(isScrollable);
      setScrollPosition(slider.scrollLeft);
    }
  }, [id, scrollPosition]);

  return (
    <div className="-ml-10 md:-ml-0 md:px-3 py-5">
      <h1 className="text-xl font-semibold px-2 text-white">{title}</h1>
      <div className="relative flex items-center">
        {scrollable && scrollPosition > 0 && (
          <div className="hidden md:block" style={{ color: "white" }}>
            <div
              style={{
                color: "white",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="hover:bg-gray-600 hover:bg-opacity-80 md:h-[177px]"
            >
              <MdChevronLeft size={35} onClick={slideLeft} />
            </div>
          </div>
        )}
        <div
          id={id}
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
        >
          <div>
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>

        <div className="hidden md:block" style={{ color: "white" }}>
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hover:bg-gray-600 hover-bg-opacity-80 md-h-[177px] md:py-16"
          >
            <MdChevronRight size={35} onClick={slideRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
