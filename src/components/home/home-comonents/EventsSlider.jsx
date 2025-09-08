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
  {
    img: "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop",
    title: "Industrial Mystery",
    des: "Explore the enigmatic charm of industrial structures. A perfect setting for those with a sense of adventure and an eye for urban beauty.",
  },
  {
    img: "https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop",
    title: "Blossom Bliss",
    des: "Revel in the vibrant colors and delicate petals of a blossoming field. An ideal retreat for those seeking a burst of natural beauty and serenity.",
  },
];

export default function Carousel() {
  const [currentSlider, setCurrentSlider] = useState(0);

  // Auto slide change
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === EventsSlider.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="mx-auto container pt-20 px-2">
      {/*  mobile এ column, lg এ row-reverse */}
      <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
        {/* main slider */}
        <div className="relative h-72 w-full transform overflow-hidden rounded-lg sm:h-96 md:h-[540px] lg:gap-10">
          {EventsSlider.map((slide, index) => {
            const { img, title, des } = slide;
            return (
              <div
                className={`${
                  index === currentSlider
                    ? "visible opacity-100 brightness-125"
                    : "invisible opacity-0"
                } absolute inset-0 duration-500 ease-linear`}
                key={`index_${index}`}
              >
                <img
                  src={img}
                  alt={title}
                  className={`h-full w-full object-cover duration-500 ease-linear ${
                    index === currentSlider ? "scale-100" : "scale-105"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                  <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-3xl">
                    <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                      <h1
                        className={`${
                          index === currentSlider ? "" : "translate-y-12"
                        } duration-500 ease-linear`}
                      >
                        {title}
                      </h1>
                    </div>
                    <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                      <p
                        className={`${
                          index === currentSlider ? "" : "-translate-y-12"
                        } duration-500 ease-linear`}
                      >
                        {des}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* slider thumbnail */}
        <div className="flex lg:flex-col flex-row items-center justify-center gap-3 p-2">
          {EventsSlider.map((slide, index) => {
            const { img, title } = slide;
            return (
              <img
                onClick={() => setCurrentSlider(index)}
                src={img}
                key={index}
                className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${
                  currentSlider === index
                    ? "opacity-100 ring ring-sky-500"
                    : "opacity-60"
                } box-content cursor-pointer rounded-md md:rounded-lg`}
                alt={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
