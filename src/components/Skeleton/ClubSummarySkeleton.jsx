import React from "react";

const ClubSammarySkeleton = () => {
  return (
    <div className="space-y-4 p-4 bg-white shadow rounded animate-pulse">
      {/* Title & Short Name */}
      <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
      <div className="h-6 w-1/4 bg-gray-300 rounded"></div>

      {/* Logo */}
      <div className="w-32 h-32 bg-gray-300 rounded-full"></div>

      {/* Banner and Details */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Banner */}
        <div className="flex-1 h-48 bg-gray-300 rounded"></div>

        {/* Text Details */}
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-3 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ClubSammarySkeleton;
