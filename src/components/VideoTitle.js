import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black absolute pt-[19%] px-6 md:px-16 text-white">
      <h1 className=" text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="flex mt-4 md:mt-0">
        <button className="bg-white px-4 p-2 md:p-2 mr-2 md:mr-2 md:px-8 text-lg text-black text-md hover:bg-opacity-80 flex items-center rounded-md">
          {/* ▶ Play */}
          <BsFillPlayFill />
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 p-2 text-lg px-8 text-white text-md rounded-md bg-opacity-50 hover:bg-opacity-30 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
