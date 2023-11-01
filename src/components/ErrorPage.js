import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const ErrorPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate("/logout");
    });
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600">
          We're sorry, but it seems like there was an error.
        </p>
        <p className="text-gray-600">Please try again later.</p>
        <div className="mt-6">
          <button
            onClick={handleOnClick}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
