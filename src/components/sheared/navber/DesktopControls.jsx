import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Sun, Moon, User, LayoutDashboard, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DesktopControls = ({ user, darkMode, setDarkMode, logout }) => {
  const [avatarUrl, setAvatarUrl] = useState(user?.photoURL || null);

  // Retry fetching avatar if not loaded
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

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setAvatarUrl(null);
    }
  };

  return (
    <div className="hidden md:flex items-center gap-4">
      {/* Search Input */}
      <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200 transition px-3 py-2">
        <Search className="text-primary mr-2 w-4 h-4" />
        <input
          type="search"
          placeholder="Search for a club"
          className="bg-transparent outline-none text-black placeholder:text-gray-500 w-full"
        />
      </label>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg"
      >
        {darkMode ? (
          <Sun className="text-yellow-500 w-5 h-5" />
        ) : (
          <Moon className="text-gray-700 w-5 h-5" />
        )}
      </Button>

      {/* User Dropdown */}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={user.name || "User Avatar"}
                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
              />
            ) : (
              <Button className="w-10 h-10 rounded-full border-2 border-green-600 p-0">
                {user?.name?.[0] || "U"}
              </Button>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-48 rounded-xl shadow-md border border-gray-200"
          >
            <DropdownMenuItem asChild>
              <Link to="/dashboard/profile" className="flex items-center gap-2 ">
                <User className="w-4 h-4" /> Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center gap-2 ">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500"
            >
              <LogOut className="w-4 h-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Link to="/auth/login">
            <Button className="button-primary">Login</Button>
          </Link>
          <Link to="/auth/register">
            <Button variant="outline" className="">Register</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopControls;
