import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex gap-2 items-center">
        <img className="w-12" src="/logo.png" alt="cumpusLogo" />
        <p className="text-3xl text-green-600 font-bold hidden sm:block">
          ClubHub
        </p>
      </div>
    </Link>
  );
};

export default Logo;
