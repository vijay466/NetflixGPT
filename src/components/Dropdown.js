import { signOut } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const UserProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());

        navigate("/logout");
      })
      .catch((error) => {
        // An error happened.
        dispatch(removeUser());
        navigate("/errorPage");
      });
  };

  return (
    <div className="relative md:px-4 md:ml-4 group md:py-7 md:-mt-11">
      <button
        className="md:flex md:items-center focus:outline-none "
        onMouseOver={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 text-white group-hover:text-gray-400 transition duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          {/* Dropdown content goes here */}

          <div className="py-2 bg-black text-white rounded-md">
            <button
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-10 hover:underline"
            >
              Profile
            </button>
            <button className="block px-4 py-2 text-sm  hover:bg-gray-10">
              Settings
            </button>
            <button
              onClick={handleSignOut}
              className="block px-4 py-2 text-sm  hover:bg-gray-10"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
