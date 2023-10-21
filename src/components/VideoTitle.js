import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black absolute pt-[22%] px-20 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white  p-2 mr-2 px-8 text-lg text-black text-md hover:bg-opacity-80 flex items-center rounded-md">
          {/* ▶ Play */}
          <BsFillPlayFill />
          Play
        </button>
        <button className="bg-gray-500 p-2 text-lg px-8 text-white text-md rounded-md bg-opacity-50 hover:bg-opacity-30 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
