import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";

const DesktopControls = ({ user, darkMode, setDarkMode, logout }) => {
  const [openModal, setOpenModal] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(user?.photoURL || null);

  const toggleModal = () => setOpenModal((s) => !s);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setOpenModal(false);
      setAvatarUrl(null);
    }
  };

  // Retry fetching avatar every 2 seconds if not available
  useEffect(() => {
    let timer;
    if (!avatarUrl && user?.photoURL) {
      setAvatarUrl(user.photoURL);
    } else if (!avatarUrl) {
      timer = setTimeout(() => {
        setAvatarUrl(user?.photoURL || null);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [avatarUrl, user?.photoURL]);

  return (
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
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={user.name || "User Avatar"}
              className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
              onClick={toggleModal}
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full border-2 border-green-600 bg-gray-300 flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={toggleModal}
            >
              {user?.name?.[0] || "U"}
            </div>
          )}

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
  );
};

export default DesktopControls;
