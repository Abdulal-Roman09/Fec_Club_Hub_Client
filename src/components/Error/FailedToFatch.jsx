import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FailedToFetch = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6 border border-green-200 max-w-md w-full text-center transform transition-transform duration-300 hover:scale-105">
        {/* Logo with subtle pulse */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-40 sm:w-52 mb-2 animate-pulse"
        />

        {/* Headline */}
        <h2 className="text-2xl font-bold text-red-500 animate-pulse">
          Failed to load clubs
        </h2>

        {/* Message */}
        <p className="text-red-400">
          Something went wrong while fetching the data. Please try again later or go back to the previous page.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row w-full">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Retry
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 px-6 py-2 bg-white border border-green-600 text-green-600 font-semibold rounded-lg shadow hover:bg-green-100 hover:scale-105 transition-all duration-300"
          >
           <span className="flex items-center gap-4"> <FaArrowLeft className="text-xl"/>
            Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedToFetch;
