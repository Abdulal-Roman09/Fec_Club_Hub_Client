import React from "react";
import { Search, User, Menu, X } from "lucide-react";
import Logo from "../../sheared/Logo";
import useAuth from "../../../hooks/useAuth";

export default function DashboardNav({ sidebarOpen, setSidebarOpen }) {
  // const { role } = useUserRole();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6 text-gray-800">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Logo />
        </div>

     

        {/* User Profile + Mobile Menu */}
        <div className="flex items-center space-x-3 flex-shrink-0 relative">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt={user?.name || "User"}
            className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
          />

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
        </div>
      </div>
    </header>
  );
}
