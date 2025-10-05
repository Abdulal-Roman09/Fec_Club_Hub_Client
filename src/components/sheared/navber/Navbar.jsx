import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import DesktopControls from "./DesktopControls";
import MobileMenu from "./MobileMenu";
import MobileControls from "./MobileControls";
import useAuth from "./../../../hooks/useAuth";
import useUserRole from "./../../../hooks/useUserRole";
import DesktopNavLinks from "./DesktopNavLinks";
import { navLinks } from "./navLinks";
import Logo from "./../Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, logout } = useAuth();
  const { role } = useUserRole();
  console.log(role);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-0">
        <Logo />
        <DesktopNavLinks navLinks={navLinks} />
        <DesktopControls
          user={user}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          logout={logout}
        />
        <MobileControls
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Mobile Search & Menu */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-2">
          <input
            type="search"
            placeholder="Search for a club"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      )}
      {isOpen && <MobileMenu navLinks={navLinks} user={user} logout={logout} />}
    </nav>
  );
};

export default Navbar;
