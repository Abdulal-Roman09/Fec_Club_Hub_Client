import Navbar from "../sheared/Navbar";
import Carousel from "./home-comonents/EventsSlider";
import Footer from "../sheared/Footer";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import AllClubs from "./home-comonents/Clubcards";
import FailedToFetch from "../Error/FailedToFatch";

const Home = () => {
  const { get } = useAxiosSecure();
  const {
    data: clubs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-clubs"],
    queryFn: async () => {
      const res = await get("all-clubs");
      // console.log(res);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError) return <FailedToFetch/>

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
