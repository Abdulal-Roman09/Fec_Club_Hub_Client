import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ClubDetails from "../components/club/ClubDetails.jsx";
import AllClubsRoutes from "../components/allClubs/AllClubs.jsx";
import Register from "../components/auth/Register.jsx";
import Login from "../components/auth/login.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clubdetails/:id",
    element: <ClubDetails />,
  },
  {
    path: "/clubs",
    element: <AllClubsRoutes />,
  },
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "auth/login",
    element: < Login/>,
  },
]);

export default router;
