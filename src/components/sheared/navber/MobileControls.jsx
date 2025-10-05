import { FiMenu, FiX, FiSearch, FiSun, FiMoon } from "react-icons/fi";

const MobileControls = ({ isOpen, setIsOpen, searchOpen, setSearchOpen, darkMode, setDarkMode }) => (
  <div className="flex items-center gap-2 md:hidden">
    <button onClick={() => setSearchOpen(!searchOpen)}>
      <FiSearch className="text-xl text-gray-700" />
    </button>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FiSun className="text-yellow-500 text-xl" /> : <FiMoon className="text-gray-700 text-xl" />}
    </button>
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <FiX className="text-2xl text-gray-800" /> : <FiMenu className="text-2xl text-gray-800" />}
    </button>
  </div>
);

export default MobileControls;
