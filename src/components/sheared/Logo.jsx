import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        {/* Logo Image */}
        <img
          className="w-8 sm:w-10 md:w-14"
          src="/logo.png"
          alt="campusLogo"
        />

        {/* Logo Text */}
        <p className=" text-primary font-bold text-xl sm:text-2xl md:text-3xl">
          ClubHub
        </p>
      </div>
    </Link>
  );
};

export default Logo;
