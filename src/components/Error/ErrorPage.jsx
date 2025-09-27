import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-12 max-w-md w-full text-center">
        {/* Icon */}
        <GraduationCap
          size={80}
          className="text-green-600  animate-bounce mx-auto"
        />{" "}
        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.png" alt="Logo" className="w-40 mx-auto" />
        </div>
        {/* Heading */}
        <h1 className="text-[80px] sm:text-[100px] font-extrabold text-red-600 leading-none mb-2">
          404
        </h1>
        {/* Message */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist. Please check the URL or
          return to the homepage to continue your learning journey.
        </p>
        {/* Button */}
        <Link to="/">
          <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 mx-auto">
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
