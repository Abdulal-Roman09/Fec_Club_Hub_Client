import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import ClubDetails from "../components/club/ClubDetails.jsx";
import AllClubsRoutes from "../components/allClubs/AllClubs.jsx";
import Register from "../components/auth/Register.jsx";
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
import AddClub from "../components/From/AddClub.jsx";
import AddClubEvents from "../components/From/AddClubEvents.jsx";
import AddClubAchievement from "../components/From/AddClubAchievement.jsx";
import AddEventCarousel from "../components/From/AddEventCarousel.jsx";
import CarousleMange from "../components/carousle/CarousleMange.jsx";
import { DashboardAllClubs } from "../components/dashboard/components/DashboardAllClubs.jsx";
import AboutPage from "../components/about/about-page-container.jsx";
import LoginPage from "@/components/auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  // clubs
  {
    path: "/clubs",
    element: <AllClubsRoutes />,
  },

  {
    path: "/clubdetails/:id",
    element: <ClubDetails />,
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
    path: "/:clubId/add-club-events",
    element: <AddClubEvents />,
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
    path: "/:clubId/add-club-achievements",
    element: <AddClubAchievement />,
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
    element: <LoginPage />,
  },
  { path: "/about", element: <AboutPage /> },
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
      { path: "add-club", element: <AddClub /> },
      { path: "clubs", element: <DashboardAllClubs /> },
      // Banner
      { path: "add-banner", element: <AddEventCarousel /> },
      { path: "manage-banner", element: <CarousleMange /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
