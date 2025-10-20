import { FiMenu, FiX, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { User, LayoutDashboard, LogOut } from "lucide-react";

const MobileControls = ({
  isOpen,
  setIsOpen,
  searchOpen,
  setSearchOpen,
  darkMode,
  setDarkMode,
  user,
  logout,
  setAvatarUrl,
}) => {
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
    <div className="flex items-center gap-2 md:hidden">
      {/* Search Button */}
      <button onClick={() => setSearchOpen(!searchOpen)}>
        <FiSearch className="text-xl text-gray-700" />
      </button>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <FiSun className="text-yellow-500 text-xl" />
        ) : (
          <FiMoon className="text-gray-700 text-xl" />
        )}
      </button>

      {/* Avatar + Dropdown (only if user exists) */}
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src={user.avatar} alt={user.name || "User"} />
              <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem asChild>
              <Link to="/dashboard/profile" className="flex items-center gap-2">
                <User className="w-4 h-4" /> Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center gap-2">
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
      )}

      {/* Hamburger Menu */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FiX className="text-2xl text-gray-800" />
        ) : (
          <FiMenu className="text-2xl text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default MobileControls;
