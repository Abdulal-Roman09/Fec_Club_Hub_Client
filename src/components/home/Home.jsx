import Navbar from "../sheared/Navbar";
import Carousel from "./home-comonents/EventsSlider";
import Footer from "../sheared/Footer";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import AllClubs from "./home-comonents/Clubcards";
import FailedToFetch from "../Error/FailedToFatch";
import Eventcarousel from "./home-comonents/Eventcarousel";

const Home = () => {
  const { get } = useAxiosSecure();

  const {
    data: clubs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-clubs"],
    queryFn: async () => {
      const res = await get("all-clubs");
      return res?.clubs || [];
    },
  });

  if (isLoading) return <Loading />;

  if (isError) return <FailedToFetch />;

  return (
    <div>
      <Navbar />
      {/* <Eventcarousel /> */}
      <Carousel />
      <AllClubs clubs={clubs} />
      <Footer />
    </div>
  );
};

export default Home;
