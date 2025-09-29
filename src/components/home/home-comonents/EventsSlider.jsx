import { useEffect, useState } from "react";
import image1 from "../../../assets/photos/fecsa-banner.jpg";
import image2 from "../../../assets/photos/fecpc-banner.jpg";
import image3 from "../../../assets/photos/roverscout-banner.jpg";

const EventsSlider = [
  {
    img: image1,
    title: "Forest Serenity",
    des: "Discover the peace and beauty of the forest. A perfect place to escape the everyday hustle and reconnect with nature.",
  },
  {
    img: image2,
    title: "Golden Canopy",
    des: "Bask in the warmth and beauty of the golden leaves against a clear blue sky. A perfect spot for a peaceful retreat and reflection.",
  },
  {
    img: image3,
    title: "Urban Exploration",
    des: "Venture into the hidden corners of the city and uncover the beauty of forgotten urban landscapes. A thrilling escape into the depths of urban architecture.",
  },
];

export default function Carousel() {
  const [currentSlider, setCurrentSlider] = useState(0);

  // Auto slide change (large screen only)
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider((prev) =>
          prev === EventsSlider.length - 1 ? 0 : prev + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto container pt-20 px-3">
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* main slider */}
        <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-96 md:h-[540px]">
          {EventsSlider.map((slide, index) => {
            const { img, title, des } = slide;
            return (
              <div
                className={`${
                  index === currentSlider
                    ? "visible opacity-100 brightness-110"
                    : "invisible opacity-0"
                } absolute inset-0 duration-500 ease-linear`}
                key={index}
              >
                <img
                  src={img}
                  alt={title}
                  className={`h-full w-full object-cover duration-500 ease-linear ${
                    index === currentSlider ? "scale-100" : "scale-105"
                  }`}
                />

                {/* overlay only for lg */}
                <div className="hidden lg:flex absolute inset-0 flex-col bg-black/40 p-5 text-center text-white">
                  <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-2xl">
                    <h1 className="mb-3 text-xl font-semibold lg:text-3xl">
                      {title}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">{des}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col flex-row items-center justify-center gap-3 p-3">
          {EventsSlider.map((slide, index) => {
            const { img, title } = slide;
            return (
              <div key={index} className="flex flex-col items-center">
                <img
                  onClick={() => setCurrentSlider(index)}
                  src={img}
                  className={`h-8 w-14 sm:h-10 sm:w-20 md:h-14 md:w-28 ${
                    currentSlider === index
                      ? "opacity-100 ring-2 ring-sky-500"
                      : "opacity-60"
                  } cursor-pointer rounded-md md:rounded-lg object-cover`}
                  alt={title}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Title & Description for small screen */}
      <div className="block lg:hidden mt-6 text-center px-3">
        <h1 className="mb-2 text-xl font-semibold">
          {EventsSlider[currentSlider].title}
        </h1>
        <p className="text-sm text-gray-700">
          {EventsSlider[currentSlider].des}
        </p>
      </div>
    </div>
  );
}
