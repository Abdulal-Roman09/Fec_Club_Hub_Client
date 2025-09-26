import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ClubDetails from "../components/club/ClubDetails.jsx";
import AllClubsRoutes from "../components/allClubs/AllClubs.jsx";
import Register from "../components/auth/Register.jsx";
import Login from "../components/auth/login.jsx";
import ProfilePage from "../components/dashboard/student/profile/Profile.jsx";
import DashboardLayouts from "../components/dashboard/dashboardLayouts/DashboardLayouts.jsx";
import DashboardHome from "../components/dashboard/dashboardLayouts/dashboardHome/Home.jsx";
import UpdateProfile from "../components/dashboard/student/profile/UpdateYourProfle.jsx";
import AllEvents from "../components/allEvents/AllEvents.jsx";
import EventsDetetils from "../components/allEvents/EventsDetetils.jsx";

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
    path: "/events",
    element: <AllEvents />,
  },
    {
    path: "/clubs/:clubId/event-detetils/:eventId",
    element: <EventsDetetils />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: <DashboardLayouts />,
    children: [
      { index: true, element: <DashboardHome /> },
      {
        path: "profile/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
