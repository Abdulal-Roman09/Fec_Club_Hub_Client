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
    <div className="mx-auto container pt-20 px-3">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* main slider */}
        <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-[540px]">
          {carousel.map((slide, index) => {
            const { image, eventTitle, description, status, eventCategory } =
              slide;
            return (
              <div
                key={slide._id}
                className={`${
                  index === currentSlider
                    ? "visible opacity-100 brightness-110"
                    : "invisible opacity-0"
                } absolute inset-0 duration-500 ease-linear`}
              >
                <img
                  src={image}
                  alt={eventTitle}
                  className={`h-full w-full object-cover duration-500 ease-linear ${
                    index === currentSlider ? "scale-100" : "scale-105"
                  }`}
                />
                {/* Status badge */}
                {status && (
                  <p
                    className="absolute left-3 bottom-3 z-40 
                bg-green-600 text-white 
                px-3 sm:px-4 md:px-5 
                py-1.5 sm:py-2 md:py-2.5 
                rounded-full text-xs sm:text-sm md:text-base 
                font-medium shadow-lg"
                  >
                    {status}
                  </p>
                )}
                {/* Status badge */}
                {status && (
                  <p
                    className="absolute left-3 bottom-3 z-40 
                bg-green-600 text-white 
                px-2 sm:px-3 md:px-4 
                py-1 sm:py-2 md:py-3 
                rounded-xl text-xs sm:text-sm md:text-base 
                font-medium shadow-lg"
                  >
                    {status}
                  </p>
                )}
                /* Event Category badge */
                {eventCategory && (
                  <p
                    className="absolute top-3 right-3 z-50 
                bg-green-600 text-white 
                px-2 sm:px-3 md:px-4 
                py-1 sm:py-2 md:py-3 
                rounded-full text-xs sm:text-sm md:text-base 
                font-medium shadow-lg"
                  >
                    {eventCategory}
                  </p>
                )}
                {/* overlay only for lg */}
                <div className="hidden lg:flex absolute inset-0 flex-col bg-black/40 p-5 text-center text-white">
                  <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-2xl">
                    <h1 className="mb-3 text-xl font-semibold lg:text-3xl">
                      {eventTitle}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col flex-row items-center justify-center gap-3 p-3">
          {carousel.map((slide, index) => {
            const { image, eventTitle } = slide;
            return (
              <div key={slide._id} className="flex flex-col items-center">
                <img
                  onClick={() => setCurrentSlider(index)}
                  src={image}
                  className={`h-8 w-14 sm:h-10 sm:w-20 md:h-14 md:w-28 ${
                    currentSlider === index
                      ? "opacity-100 ring-2 ring-sky-500"
                      : "opacity-60"
                  } cursor-pointer rounded-md md:rounded-lg object-cover`}
                  alt={eventTitle}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Title & Description for small screen */}
      {carousel.length > 0 && (
        <div className="block lg:hidden mt-6 text-center px-3">
          <h1 className="mb-2 text-xl font-semibold">
            {carousel[currentSlider].eventTitle}
          </h1>
          <p className="text-sm text-gray-700">
            {carousel[currentSlider].description}
          </p>
        </div>
      )}
    </div>
  );
}
