import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiSearch,
  FiHome,
  FiUsers,
  FiCalendar,
  FiInfo,
} from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useAuth();
  console.log(user);

  const handleLogout = () => {
    console.log("User logged out");
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Clubs", path: "/clubs", icon: <FiUsers /> },
    { name: "Events", path: "/events", icon: <FiCalendar /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <img
              className="h-12 w-12 object-contain"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <h1 className="font-header font-extrabold md:text-3xl text-2xl text-green-600 hover:text-green-700 transition-colors duration-200 ease-in-out">
            ClubHub
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:text-xl md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-1 transition font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Search + Theme toggle (Desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200 transition-all duration-200 px-3 py-2 min-w-[220px]">
            <FiSearch className="text-green-600 mr-2" />
            <input
              id="club_search"
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-black placeholder-gray-500 w-full"
            />
          </label>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
          >
            {darkMode ? (
              <FiSun className="text-yellow-500 text-xl" />
            ) : (
              <FiMoon className="text-gray-700 text-xl" />
            )}
          </button>
        </div>

        {/* login and register OR logout + avatar */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? (
            <FiX className="text-2xl text-gray-800" />
          ) : (
            <FiMenu className="text-2xl text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-md px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 transition font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}

          {/* Search in mobile */}
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              id="club_search_mobile"
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme toggle in mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
          >
            {darkMode ? (
              <>
                <FiSun className="text-yellow-500 text-xl" />{" "}
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FiMoon className="text-gray-700 text-xl" />{" "}
                <span>Dark Mode</span>
              </>
            )}
          </button>

          {/* Auth section in mobile */}
          {user ? (
            <div className="flex items-center gap-3 mt-2">
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-green-600"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium text-center"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
