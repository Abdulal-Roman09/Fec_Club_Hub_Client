import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Home, ChevronDown } from "lucide-react";
import Logo from "../../sheared/Logo";
import useAuth from "../../../hooks/useAuth";

export default function DashboardNav({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close modal when clicking outside
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
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6 text-gray-800">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Logo />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3 flex-shrink-0 relative">
          {/* Profile Avatar */}
          <div
            onClick={() => setOpenModal(!openModal)}
            className="flex items-center gap-1 cursor-pointer"
          >
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt={user?.name || "User"}
              className="w-10 h-10 rounded-full border-2 border-green-600 hover:scale-105 transition"
            />
            <ChevronDown
              className={`h-4 w-4 text-gray-600 transition-transform ${
                openModal ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl hover:bg-green-100 transition-colors"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5 " />
              ) : (
                <Menu className="h-5 w-5 " />
              )}
            </button>
          </div>

          {/* Dropdown Menu */}
          {openModal && (
            <div
              ref={modalRef}
              className="absolute right-0 top-12 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fadeIn"
            >
              <div className="flex flex-col text-gray-700">
                <Link
                  to="/dashboard/profile"
                  onClick={() => setOpenModal(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                >
                  <User className="h-4 w-4 text-green-600" />
                  Profile
                </Link>

                <Link
                  to="/"
                  onClick={() => setOpenModal(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                >
                  <Home className="h-4 w-4 text-green-600" />
                  Home
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setOpenModal(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition"
                >
                  <LogOut className="h-4 w-4 text-red-500" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
