import React from "react";

const ClubDetailsSkeleton = () => {
  return (
    <div className="animate-pulse font-all min-h-screen bg-gray-50">
      {/* Banner Skeleton */}
      <div className="h-96 w-full bg-gray-300 relative mb-6 rounded-lg"></div>

      {/* Tabs Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex space-x-5 overflow-x-auto">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-10 w-32 bg-gray-300 rounded-md"
              ></div>
            ))}
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="container mx-auto px-2 lg:px-0 py-8 space-y-6">
        {/* Club Summary */}
        <div className="h-6 w-3/5 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-full bg-gray-200 rounded-md"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ClubDetailsSkeleton;
