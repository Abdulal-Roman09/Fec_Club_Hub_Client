import Navbar from "../sheared/Navbar";
import AllClubs from "./home-comonents/Clubcards";
import clubs from "/public/clubData.js";
import Carousel from "./home-comonents/EventsSlider";
import Footer from "../sheared/Footer";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <AllClubs clubs={clubs} />
      <Footer />
    </div>
  );
};

export default Home;
