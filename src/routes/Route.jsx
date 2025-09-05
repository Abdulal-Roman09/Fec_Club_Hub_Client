import { createBrowserRouter } from "react-router-dom";
import Club from "../components/club/Club.jsx";
import Home from "./../components/home/Home";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
]);

export default router;
