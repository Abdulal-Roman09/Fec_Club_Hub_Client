import { NavLink } from "react-router-dom";

const DesktopNavLinks = ({ navLinks }) => (
  <div className="hidden lg:flex items-center gap-6">
    {navLinks.map((link, idx) => (
      <NavLink
        key={idx}
        to={link.path}
        className={({ isActive }) =>
          `flex items-center gap-1 transition font-medium ${
            isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
          }`
        }
      >
        {link.icon}
        {link.name}
      </NavLink>
    ))}
  </div>
);

export default DesktopNavLinks;
