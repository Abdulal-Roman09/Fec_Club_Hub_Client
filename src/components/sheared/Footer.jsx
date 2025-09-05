import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            {" "}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-green-600">ClubHub</h1>
          </div>
          <p className="">
            Discover, explore, and join clubs at FEC. Connect with communities,
            events, and activities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg mb-2">Quick Links</h2>
          <a href="/" className="hover:text-green-500 transition">
            Home
          </a>
          <a href="/clubs" className="hover:text-green-500 transition">
            Clubs
          </a>
          <a href="/events" className="hover:text-green-500 transition">
            Events
          </a>
          <a href="/about" className="hover:text-green-500 transition">
            About
          </a>
          <a href="/contact" className="hover:text-green-500 transition">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg mb-2">Contact Us</h2>
          <p>Email: info@clubhub.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: FEC, Faridpur, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white text-lg mb-2">Follow Us</h2>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ClubHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
