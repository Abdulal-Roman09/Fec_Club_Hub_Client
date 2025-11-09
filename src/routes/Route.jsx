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
import AddTestimonial from "@/components/From/AddTestimonial";
import PrivateRoute from "@/Routers/PrivateRoute";

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

  // committee (Protected)
  {
    path: "/:clubId/add-club-committee-member",
    element: (
      <PrivateRoute>
        <AddClubCommitteeMember />
      </PrivateRoute>
    ),
  },

  // events
  {
    path: "/events",
    element: <AllEvents />,
  },
  {
    path: "/:clubId/add-club-events",
    element: (
      <PrivateRoute>
        <AddClubEvents />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute>
        <AddClubAchievement />
      </PrivateRoute>
    ),
  },
  {
    path: "/clubs/:clubId/achievements-details/:achievementId",
    element: <AchievementsDetelies />,
  },

  // testimonial (Protected)
  {
    path: "/:clubId/add-testimonial/:userId",
    element: (
      <PrivateRoute>
        <AddTestimonial />
      </PrivateRoute>
    ),
  },

  // authentication
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },

  // about
  {
    path: "/about",
    element: <AboutPage />,
  },

  // Dashboard (Fully Protected)
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayouts />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      {
        path: "profile/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "add-club",
        element: (
          <PrivateRoute>
            <AddClub />
          </PrivateRoute>
        ),
      },
      {
        path: "clubs",
        element: (
          <PrivateRoute>
            <DashboardAllClubs />
          </PrivateRoute>
        ),
      },
      {
        path: "add-banner",
        element: (
          <PrivateRoute>
            <AddEventCarousel />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-banner",
        element: (
          <PrivateRoute>
            <CarousleMange />
          </PrivateRoute>
        ),
      },
    ],
  },

  // error route
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
