import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 border-t border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-0 flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-2xl font-bold text-green-600">ClubHub</h1>
          </div>
          <p className="text-gray-600">
            Discover, explore, and join clubs at FEC. Connect with communities,
            events, and activities.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
          <h2 className="font-semibold text-gray-800 text-lg mb-2">Contact Us</h2>

          <a href="mailto:info@clubhub.com" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaEnvelope className="text-green-600" />
            <span>Email: info@clubhub.com</span>
          </a>

          <a href="tel:+8801234567890" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaPhone className="text-green-600" />
            <span>Phone: +880 1234 567890</span>
          </a>

          <p className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaMapMarkerAlt className="text-green-600" />
            <span>Address: FEC, Faridpur, Bangladesh</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
          <h2 className="font-semibold text-gray-800 text-lg mb-2">Quick Links</h2>

          <Link to="/" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaHome className="text-green-600" />
            <span>Home</span>
          </Link>

          <Link to="/clubs" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaUsers className="text-green-600" />
            <span>Clubs</span>
          </Link>

          <Link to="/events" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaCalendarAlt className="text-green-600" />
            <span>Events</span>
          </Link>

          <Link to="/about" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaInfoCircle className="text-green-600" />
            <span>About</span>
          </Link>

          <Link to="/contact" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <FaEnvelope className="text-green-600" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
          <h2 className="font-semibold text-gray-800 text-lg mb-2">Follow Us</h2>
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-green-600 transition-colors duration-200 p-3 rounded-full flex items-center justify-center text-gray-800 shadow-sm">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-blue-400 transition-colors duration-200 p-3 rounded-full flex items-center justify-center text-gray-800 shadow-sm">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-pink-500 transition-colors duration-200 p-3 rounded-full flex items-center justify-center text-gray-800 shadow-sm">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-blue-700 transition-colors duration-200 p-3 rounded-full flex items-center justify-center text-gray-800 shadow-sm">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-200"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ClubHub. Developed by Abdul Al Roman
      </div>
    </footer>
  );
};

export default Footer;
