import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileMenu = ({ navLinks, user, logout }) => {
  return (
    <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-md px-4 py-3 flex flex-col gap-3">
      {/* Navigation Links */}
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            `flex items-center gap-2 transition font-medium ${
              isActive ? "text-primary" : "text-black "
            }`
          }
        >
          {link.icon}
          {link.name}
        </NavLink>
      ))}

      {/* Login / Logout */}
      {user ? (
        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/auth/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
