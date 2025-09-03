import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/photos/fecsa-banner.jpg";
import image2 from "../assets/photos/fecpc-banner.jpg";
import image3 from "../assets/photos/roverscout-banner.jpg";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      clubName: "FECSA",
      eventDescription:
        "Join The Sports With The Only Sporting Club Of Faridpur Engineering College.",
      eventPhoto: image1,
    },
    {
      clubName: "Photographic Club",
      eventDescription:
        "Join The Photographic Club To Capture The Moments Of Life",
      eventPhoto: image2,
    },
    {
      clubName: "Rover Scout",
      eventDescription:
        "Join Rover Scout For self-development and community service",
      eventPhoto: image3,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  //handles automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-background-secondary overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        {/* Carousel Wrapper */}
        {slides.map((event, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 transition-opacity duration-700 ease-in-out w-full h-full overflow-hidden ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={event.eventPhoto}
              alt={`Slide ${index + 1}`}
              className="w-full aspect-video brightness-90 object-center object-cover -z-10"
            />

            {/* Club Info Overlay */}
            <div className="flex flex-col gap-3 text-white absolute top-[65%] left-1/12 z-20 transition-opacity duration-700 ease-in-out">
              <h2 className="text-5xl font-bold mb-2 text-white drop-shadow-2xl">
                {event.clubName}
              </h2>
              <p className="text-xl text-white/90 drop-shadow-lg max-w-md">
                {event.eventDescription}
              </p>
              <div className="flex justify-end mt-5">
                <button className="cursor-pointer relative bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border-0">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        ))}

        {/*Blur Overlay */}
        <div className="absolute rotate-22 top-[60%] -left-[20%] h-[90rem] w-[95rem] bg-gradient-to-r from-primary/30 via-primary/20 to-transparent backdrop-blur-sm z-10"></div>
      </div>

      {/*Slider Indicators */}
      <div className="absolute z-50 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide
                ? "bg-primary shadow-lg shadow-primary/90"
                : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-xl">
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous slide</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg hover:shadow-xl">
          <svg
            className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next slide</span>
        </span>
      </button>
    </div>
  );
};

export default ImageSlider;
