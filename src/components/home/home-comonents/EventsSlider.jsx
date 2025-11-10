import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CarouselSkeleton from "@/components/Skeleton/CarouselSkeleton";

export default function Carousel() {
  const { get } = useAxiosSecure();

  const {
    data: carousel = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["carousel"],
    queryFn: async () => {
      const res = await get("/get-all-event-carousel");
      console.log("Events array:", res.events);
      return res.events;
    },
  });

  const [currentSlider, setCurrentSlider] = useState(0);

  // Auto slide change
  useEffect(() => {
    if (carousel.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentSlider((prev) =>
          prev === carousel.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [carousel]);

  if (isLoading) return <CarouselSkeleton />;
  if (isError) return <FailedToFetch />;
  if (carousel.length === 0) return <p>No events found.</p>;

  return (
    <div className="mx-auto container py-32 px-3">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* main slider */}
        <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-[540px] lg:h-[600px]">
          {carousel.map((slide, index) => {
            const { image, eventTitle, status, eventCategory } = slide;
            return (
              <Card
                key={slide._id}
                className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                  index === currentSlider
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                } overflow-hidden rounded-lg`}
              >
                <img
                  src={image}
                  alt={eventTitle}
                  className="w-full h-full object-cover object-center"
                />

                {/* Status badge */}
                {status && (
                  <Badge className="absolute left-3 bottom-3 bg-green-600 text-white px-3 py-1 rounded-xl shadow-lg text-xs sm:text-sm md:text-base">
                    {status}
                  </Badge>
                )}

                {/* Event Category badge */}
                {eventCategory && (
                  <Badge className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full shadow-lg text-xs sm:text-sm md:text-base">
                    {eventCategory}
                  </Badge>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Title & Description for small screen */}
      {carousel.length > 0 && (
        <div className="block mt-6 text-center">
          <Card className="bg-transparent backdrop-blur-sm p-4 rounded-lg shadow">
            <CardContent>
              <h1 className="mb-2 text-xl font-semibold text-black drop-shadow-md">
                {carousel[currentSlider].eventTitle}
              </h1>
              <p className="text-sm text-gray-900 drop-shadow-sm">
                {carousel[currentSlider].description}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
