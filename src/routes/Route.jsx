import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ClubDetails from "../components/club/ClubDetails.jsx";
import AllClubsRoutes from "../components/allClubs/AllClubs.jsx";

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
]);

export default router;
