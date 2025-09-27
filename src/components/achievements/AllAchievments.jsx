import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { FaCalendarAlt, FaTrophy, FaInfoCircle, FaMedal } from "react-icons/fa";
import Footer from "./../sheared/Footer";
import Navbar from "./../sheared/Navbar";

const Achievements = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: achievements = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["achievements", id],
    queryFn: async () => {
      const res = await get(`/all-achievements`);
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <>
      <Navbar />{" "}
      <div className="py-20">
        <div className="space-y-8 px-4 lg:px-0 mx-auto container md:px-0">
          {achievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div
                  key={achievement._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
                      <FaTrophy /> {achievement.year}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    {/* Title */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaInfoCircle />
                      <span className="font-medium">Title:</span>
                      <span>{achievement.title}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaCalendarAlt />
                      <span className="font-medium">Date:</span>
                      <span>
                        {new Date(achievement.date).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaTrophy />
                      <span className="font-medium">Year:</span>
                      <span>{achievement.year}</span>
                    </div>

                    {/* Result */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaMedal />
                      <span className="font-medium">Result:</span>
                      <span>{achievement.result}</span>
                    </div>

                    <Link
                      to={`/clubs/${id}/achievements-details/${achievement._id}`}
                      className="block w-full"
                    >
                      <button className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-2xl text-gray-400 text-center py-16">
              No achievement to show yet
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Achievements;
