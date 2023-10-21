import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMAGE, NEXTFLIX_LOGO } from "../utils/constansts";

const Logout = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);
  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" alt="netflix_logo" src={NEXTFLIX_LOGO}></img>
      </div>
      <div className="absolute w-screen h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMAGE}
          alt="bg_img"
        />
      </div>

      <div className=" bg-white absolute text-black w-4/12  my-40 mx-auto left-0 right-0 rounded-lg">
        <p className="text-balck text-3xl px-7 py-10">Leaving So Soon? </p>
        <p className="px-7">
          Just so you know, you don’t always need to sign out of Netflix. It’s
          only necessary if you’re on a shared or public computer.
        </p>
        <p className="py-7 px-7">
          You’ll be redirected to Netflix.com in 10 seconds.
        </p>
        ``
        <div className="px-7 py-3 w - 4/12  mt-[-35px] ">
          <button
            onClick={handleButtonClick}
            className="  px-7 py-3  w-full text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
