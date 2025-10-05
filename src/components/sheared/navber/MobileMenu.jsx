import { NavLink, Link } from "react-router-dom";

const MobileMenu = ({ navLinks, user, logout }) => (
  <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-md px-4 py-3 flex flex-col gap-3">
    {navLinks.map((link, idx) => (
      <NavLink
        key={idx}
        to={link.path}
        onClick={() => {}}
        className={({ isActive }) =>
          `flex items-center gap-2 transition font-medium ${
            isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
          }`
        }
      >
        {link.icon}
        {link.name}
      </NavLink>
    ))}

    {user ? (
      <div className="flex items-center gap-3 mt-2">
        <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full border-2 border-green-600" />
        <button
          onClick={() => logout().catch(console.log)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="flex flex-col gap-2 mt-2">
        <Link to="/auth/login" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center">Login</Link>
        <Link to="/auth/register" className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg font-medium text-center">Register</Link>
      </div>
    )}
  </div>
);

export default MobileMenu;
