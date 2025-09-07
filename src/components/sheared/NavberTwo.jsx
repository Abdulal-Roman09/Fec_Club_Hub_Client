import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { FiHome, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavberTwo = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const modalRef = useRef(null);

  const navLink = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiHome /> },
    { name: "Contact", path: "/contact", icon: <FiHome /> },
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 shadow-sm">
      <div className="mx-auto container flex justify-between items-center py-4 px-4 sm:px-0 relative">
        {/* Left: Logo */}
        <div>
          <Logo />
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLink.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 ${
                  isActive
                    ? "text-green-500 font-semibold"
                    : "text-gray-200 hover:text-green-400 transition-colors"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Right: User/Auth + Search */}
        <div className="flex items-center space-x-2 relative" ref={modalRef}>
          {/* Search Button */}
          <button
            onClick={() => setOpenSearch(!openSearch)}
            className="text-gray-200 hover:text-green-400 text-2xl p-1 transition"
          >
            <FiSearch />
          </button>

          {/* User Profile / Auth Buttons */}
          {user ? (
            <div className="relative">
              <img
                onClick={() => setOpenModal(!openModal)}
                className="w-12 h-12 rounded-full border border-green-400 cursor-pointer"
                src={user.photoURL}
                alt={user.displayName}
              />
              {openModal && (
                <div className="absolute right-0 w-44 bg-white rounded-lg shadow-lg mt-3 py-2 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setOpenModal(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setOpenModal(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/logout"
                    onClick={() => setOpenModal(false)}
                    className="block px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link
                to="/auth/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="block md:hidden text-gray-200 text-2xl ml-2"
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Search Input */}
      {openSearch && (
        <div className="absolute top-full left-0 right-0 mt-2 px-4 sm:px-0 z-40 bg-transparent ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-full left-0 right-0 bg-amber-700 py-4 flex flex-col space-y-2 md:hidden z-40 px-4">
          {navLink.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setOpenMenu(false)}
              className="flex items-center space-x-2 text-white py-2 px-2 hover:bg-green-600 rounded transition"
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavberTwo;
