import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NEXTFLIX_LOGO } from "../utils/constansts";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        console.log("if user" + user);
      } else {
        console.log(user);
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src = {NEXTFLIX_LOGO}
        alt="netflix_logo"
      />

      {user && (
        <div className="flex p-2 m-3">
          <img
            className="w-12 h-12 "
            alt="userIcon"
            src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
          />

          <button
            onClick={handleSignOut}
            className="text-white text-sm font-bold p-2 bg-red-600 m-3 rounded-md px-3 py-2 hover:bg-red-800 focus:ring-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
