import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 20000);
  }, []);
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        ></img>
      </div>
      <div className=" bg-white absolute text-black w-4/12  my-40 mx-auto left-0 right-0 rounded-lg">
        <p className="text-balck text-3xl px-7 py-10">Leaving So Soon? </p>
        <p className="px-7">
          Just so you know, you don’t always need to sign out of Netflix. It’s
          only necessary if you’re on a shared or public computer.
        </p>
        <p className="py-7 px-7">
          You’ll be redirected to Netflix.com in 20 seconds.
        </p>
        <div className="px-7 py-3">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center px-7 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
