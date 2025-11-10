import React from "react";

const ClubSkeleton = () => {
  return (
    <section id="club-skeleton" className="bg-background-secondary py-16">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="h-10 bg-gray-300 rounded w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
      </div>

      {/* Skeleton Cards Grid */}
      <div className="container mx-auto px-4 sm:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-border overflow-hidden animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-gray-300"></div>

              {/* Card Content Placeholder */}
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-10 bg-gray-300 rounded mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubSkeleton;
