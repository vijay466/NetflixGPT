import React from "react";
import Shimmer from "./Shimmer";

const ShimmerList = ({ count }) => (
  <div className="relative flex items-center">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="mb-3">
        <Shimmer />
      </div>
    ))}
  </div>
);

export default ShimmerList;
