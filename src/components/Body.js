import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

import Logout from "./Logout";
import GptSearch from "./GptSearch";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/search",
      element: <GptSearch />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/errorpage",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
