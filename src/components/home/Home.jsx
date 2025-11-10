import React from "react";
import Navbar from "../sheared/navber/Navbar";
import Carousel from "./home-comonents/EventsSlider";
import Footer from "../sheared/Footer";
import HomeClub from "./home-comonents/HomeClub";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HomeClub />
      <Footer />
    </div>
  );
};

export default Home;
