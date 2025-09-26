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
import useUserRole from "../../hooks/useUserRole";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { user, logout } = useAuth();
  const { role } = useUserRole();

  const toggleModal = () => setOpenModal(!openModal);

  const handleLogout = () => {
    logout()
      .then(() => console.log("User logged out"))
      .catch((err) => console.log(err));
    setOpenModal(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Clubs", path: "/clubs", icon: <FiUsers /> },
    { name: "Events", path: "/events", icon: <FiCalendar /> },
    { name: "About", path: "/about", icon: <FiInfo /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-0 ">
        {/* Left */}
        <div className="flex gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-10 w-10 object-contain"
              src="/logo.png"
              alt="logo"
            />
            <h1 className="font-header font-extrabold text-green-600 text-xl md:text-2xl hover:text-green-700 transition">
              ClubHub
            </h1>
          </Link>
        </div>

        {/* Center Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Right Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200 transition px-3 py-2">
            <FiSearch className="text-green-600 mr-2" />
            <input
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-black placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme Toggle */}
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

          {/* Auth / Avatar */}
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
                onClick={toggleModal}
              />

              {/* Modal */}
              {openModal && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="flex flex-col">
                    <Link
                      to="/dashboard/profile"
                      onClick={() => setOpenModal(false)}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      onClick={() => setOpenModal(false)}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 text-left hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <FiSearch className="text-xl text-gray-700" />
          </button>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <FiSun className="text-yellow-500 text-xl" />
            ) : (
              <FiMoon className="text-gray-700 text-xl" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-2xl text-gray-800" />
            ) : (
              <FiMenu className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-2">
          <input
            type="search"
            placeholder="Search for a club"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}

      {/* Mobile Menu */}
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

          {/* Mobile Auth */}
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
                to="/auth/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
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
