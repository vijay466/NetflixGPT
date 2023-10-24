import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NEXTFLIX_LOGO } from "../utils/constansts";
import UserProfileDropdown from "./Dropdown";
import SearchBar from "./SearchBar";

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
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-16 py-1 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between bg-black sm:bg-blue-600 md:bg-green-500">
      <img
        className="bg-gradient-to-b from-black to-transparent w-44 mx-auto md:mx-0"
        src={NEXTFLIX_LOGO}
        alt="netflix_logo"
      />

      {user && (
        <div className="flex m-3 mx-2">
          <SearchBar />
          <img
            className="w-10 h-10 mt-2 "
            alt="userIcon"
            src="https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          />
          <UserProfileDropdown />
        </div>
      )}
    </div>
  );
};

export default Header;
