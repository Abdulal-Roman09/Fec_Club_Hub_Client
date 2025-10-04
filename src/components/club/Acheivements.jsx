import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { FaCalendarAlt, FaInfoCircle, FaMedal, FaTrophy } from "react-icons/fa";
import { Plus } from "lucide-react";

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
      const res = await get(`/clubs/${id}/achievements`);
      // console.log(res.data);
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="space-y-8 px-4 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="font-header text-5xl font-bold text-gray-900 mb-4">
          Club Achievements
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Celebrating our milestones and successes.
        </p>
      </div>
      {/* Add Achivents */}

      <div className="flex flex-col items-center justify-center space-y-4 ">
        <Link
          to={`/${id}/add-club-achievements`}
          className="flex flex-col items-center bg-green-400 py-10 px-20 rounded-2xl"
        >
          {/* Circle + Plus */}
          <div className="bg-green-50 w-40 h-40 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
            <Plus size={100} className="text-green-600" />
          </div>

          {/* Text */}
          <span className="text-gray-700 font-semibold text-xl mt-2">
            Add Member
          </span>
        </Link>
      </div>
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
                  <span>{new Date(achievement.date).toLocaleDateString()}</span>
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
  );
};

export default Achievements;
