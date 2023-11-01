import React, { useState, useRef, useEffect } from "react";

import openai from "../utils/openAi";
import { useDispatch } from "react-redux";
import {
  addGptMovieResult,
  buttonClicked,
  removeButtonClicked,
  removeGptMoviesAndMovieResults,
} from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constansts";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchbarRef = useRef(null);
  const inputText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleMessageButton = () => {
    setMessage("");
    dispatch(removeButtonClicked());
    dispatch(removeGptMoviesAndMovieResults());
  };
  const handleOnchange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setMessage(inputValue);
    if (!inputValue) dispatch(removeButtonClicked());
  };
  const handleClick = async () => {
    if (message) dispatch(buttonClicked());

    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the Query : " +
      inputText.current.value +
      ". only give me names of 10 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    const movies = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const movieNames = movies?.choices[0]?.message?.content.split(",");


    const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));
    // [promise,promise,promise,promise,promise] => js will not wait

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieResult: tmdbResults, gptMovies: movieNames })
    );
  };

  // for each movie I will search in TMDB api
  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  const closeSearchBar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchbarRef.current &&
        !searchbarRef.current.contains(event.target)
      ) {
        closeSearchBar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mr-2 md:px-6  py-2" ref={searchbarRef}>
      <div className={`flex ${isOpen ? "justify-end" : "justify-start"}`}>
        <div className="relative">
          <div className="md:mr-17 -ml-7 md:-ml-0">
            <div className="relative" style={{ display: "flex" }}>
              <input
                ref={inputText}
                type="text"
                onChange={handleOnchange}
                placeholder="Titles, people, genres"
                value={message}
                className={`px-4  py-2 w-64 border border-white bg-black text-white focus:outline-none ${
                  isOpen ? "block" : "hidden"
                }`}
              />
              {message && isOpen && (
                <button
                  onClick={handleMessageButton}
                  className="absolute top-0 right-0 mr-12 h-full w-8 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              {isOpen && (
                <button
                  onClick={handleClick}
                  className=" bg-blue-300 px-3 bg-gradient-to-b from-blue-600  text-white"
                >
                  Go
                </button>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={toggleSearchBar}
          className={`ml-24 md:ml-0  md:px-3 cursor-pointer ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 17a7 7 0 117-7 7 7 0 01-7 7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
