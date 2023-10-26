import React from "react";

const Shimmer = () => {
  return (
    <div className="md:w-[185px]  w-[185px]  md:inline-block p-2 cursor-pointer hover:scale-100 ease-in-out duration-300">
      <div className="animate-pulse rounded-lg md:rounded-none flex">
        {/* Shimmer for the image */}
        <div className="bg-gray-600 h-64 w-44 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Shimmer;
