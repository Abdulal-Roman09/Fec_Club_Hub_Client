import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        {/* Left Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
        >
          <FiArrowLeft className="text-emerald-700" size={20} />
        </button>

        {/* Title & Description Center */}
        <div className="text-center flex-1">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
            My Profile
          </h1>
          <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
            View and manage your personal information
          </p>
        </div>

        {/* Update Button */}
        <Link
          to="/dashboard/profile/edit"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Edit size={18} />
          <span className="hidden sm:inline">Update</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
