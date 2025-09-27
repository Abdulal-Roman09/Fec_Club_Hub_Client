import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { FaCalendarAlt, FaTrophy } from "react-icons/fa";

const Achievements = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: achievements = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["achievements", id],
    queryFn: async () => {
      const res = await get(`/clubs/${id}/achievements`);
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
                <div className="flex ">
                  <span className="text-gray-500 font-medium">Title:</span>
                  <span className="text-gray-800 ">
                    {achievement.title}
                  </span>
                </div>

                <div className="flex  items-center">
                  <span className="text-gray-500 font-medium">Date:</span>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" />
                    <span className="text-gray-700">
                      {new Date(achievement.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex ">
                  <span className="text-gray-500 font-medium">Year:</span>
                  <span className="text-gray-700">{achievement.year}</span>
                </div>

                <div className="flex ">
                  <span className="text-gray-500 font-medium">Result:</span>
                  <span className="text-gray-700">{achievement.result}</span>
                </div>

                <button
                  onClick={() => navigate(`/achievements/${achievement._id}`)}
                  className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  View Details
                </button>
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
