import { FiHome, FiUsers, FiCalendar, FiInfo } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";

export const navLinks = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Clubs", path: "/clubs", icon: <FiUsers /> },
  { name: "Events", path: "/events", icon: <FiCalendar /> },
  { name: "Achievements", path: "/achievements", icon: <GiAchievement /> },
  { name: "About", path: "/about", icon: <FiInfo /> },
];
