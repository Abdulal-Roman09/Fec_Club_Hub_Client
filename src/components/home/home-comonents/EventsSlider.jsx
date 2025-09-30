import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";

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

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  if (carousel.length === 0) return <p>No events found.</p>;

  return (
    <div className="mx-auto container py-20 px-3">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* main slider */}
        {/* main slider */}
        <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-[540px] lg:h-[600px]">
          {carousel.map((slide, index) => {
            const { image, eventTitle, status, eventCategory } = slide;
            return (
              <div
                key={slide._id}
                className={`${
                  index === currentSlider
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                } absolute inset-0 duration-500 ease-linear`}
              >
                <img
                  src={image}
                  alt={eventTitle}
                  className={`w-full h-full object-cover object-center duration-500 ease-linear`}
                />
                {/* Status badge */}
                {status && (
                  <p className="absolute left-3 bottom-3 z-40 bg-green-600 text-white px-2 sm:px-6 md:px-8 py-1 sm:py-4 md:py-6 rounded-xl text-xs sm:text-sm md:text-base font-medium shadow-lg">
                    {status}
                  </p>
                )}
                {/* Event Category badge */}
                {eventCategory && (
                  <p className="absolute top-3 right-3 z-50 bg-green-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-lg">
                    {eventCategory}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Title & Description for small screen */}
      {carousel.length > 0 && (
        <div className="block mt-6 text-center">
          <div className="bg-transparent backdrop-blur-sm p-4 rounded-lg shadow">
            <h1 className="mb-2 text-xl font-semibold text-black drop-shadow-md">
              {carousel[currentSlider].eventTitle}
            </h1>
            <p className="text-sm text-gray-900 drop-shadow-sm">
              {carousel[currentSlider].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
