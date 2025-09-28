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
import ErrorPage from "../components/Error/ErrorPage.jsx";
import AllAchievments from "../components/achievements/AllAchievments.jsx";
import AchievementsDetelies from "../components/achievements/AchievementsDetelies.jsx";
import { AddClubCommitteeMember } from "../components/From/AddClubCommitteeMember.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clubdetails/:id",
    element: <ClubDetails />,
  },
  {
    path: "/clubs",
    element: <AllClubsRoutes />,
  },
  // committee
  {
    path: "/:clubId/add-club-committee-member",
    element: <AddClubCommitteeMember />,
  },
  // events
  {
    path: "/events",
    element: <AllEvents />,
  },
  {
    path: "/clubs/:clubId/event-detetils/:eventId",
    element: <EventsDetetils />,
  },
  // achievements
  {
    path: "/achievements",
    element: <AllAchievments />,
  },
  {
    path: "/clubs/:clubId/achievements-details/:achievementId",
    element: <AchievementsDetelies />,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
