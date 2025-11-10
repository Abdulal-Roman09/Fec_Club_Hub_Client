import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CarouselSkeleton = () => {
  return (
    <div className="mx-auto container py-32 px-3 animate-pulse">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* Main slider skeleton */}
        <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-[540px] lg:h-[600px]">
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>

          {/* top-right badge */}
          <div className="absolute top-3 right-3 bg-gray-400 rounded-full h-6 w-20 sm:h-7 sm:w-24"></div>

          {/* bottom-left badge */}
          <div className="absolute left-3 bottom-3 bg-gray-400 rounded-xl h-6 w-20 sm:h-7 sm:w-24"></div>
        </div>
      </div>

      {/* Title & description skeleton */}
      <div className="block mt-6 text-center">
        <Card className="bg-transparent backdrop-blur-sm p-4 rounded-lg shadow">
          <CardContent className="space-y-3">
            <div className="h-5 bg-gray-300 rounded w-1/3 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
