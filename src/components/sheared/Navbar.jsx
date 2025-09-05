import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // nav links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Clubs", path: "/clubs" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-12 w-12 object-contain" src="/logo.png" alt="logo" />
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
                `transition font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Search + Theme toggle (Desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Search Box */}
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 px-3 py-2 min-w-[220px]">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              id="club_search"
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme toggle */}
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
              onClick={() => setIsOpen(false)} // close menu after click
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Search Box (Mobile) */}
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              id="club_search_mobile"
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
          >
            {darkMode ? (
              <>
                <FiSun className="text-yellow-500 text-xl" /> <span>Light Mode</span>
              </>
            ) : (
              <>
                <FiMoon className="text-gray-700 text-xl" /> <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
