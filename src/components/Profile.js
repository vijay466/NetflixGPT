import React from "react";
import { useSelector } from "react-redux";
import { BACKGROUND_IMAGE, NEXTFLIX_LOGO } from "../utils/constansts";

const Profile = () => {
  const userName = useSelector((store) => store.user.displayName);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute w-screen h-screen ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMAGE}
          alt="bg_img"
        />
      </div>
      {/* Header with Netflix Logo */}
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img className="w-44" alt="netflix_logo" src={NEXTFLIX_LOGO} />
      </div>
      {/* User Icon */}
      <div
        className="absolute flex flex-col items-center justify-center h-full w-full"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <div className="text-white text-2xl p-4 font-bold">{userName}</div>
        <img
          className="w-36"
          alt="userIcon"
          src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
        />
      </div>
    </div>
  );
};

export default Profile;
