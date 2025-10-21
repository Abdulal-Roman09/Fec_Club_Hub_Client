import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { FaCalendarAlt, FaInfoCircle, FaMedal, FaTrophy } from "react-icons/fa";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="space-y-10 py-8">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Club Achievements
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Celebrating our milestones and successes.
        </p>
      </div>

      {/* Add Achievement */}
      <div className="flex justify-center">
        <Link
          to={`/${id}/add-club-achievements`}
          className="flex flex-col items-center bg-green-100 hover:bg-green-200 py-8 px-10 sm:py-10 sm:px-16 rounded-2xl shadow-md transition-all duration-300"
        >
          <div className="bg-green-50 w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
            <Plus size={70} className="text-primary" />
          </div>
          <span className="text-gray-700 font-semibold text-lg sm:text-xl mt-3">
            Add Achievement
          </span>
        </Link>
      </div>

      {/* Achievements List */}
      {achievements.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement) => (
            <Card
              key={achievement._id}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="p-0 relative">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 sm:h-52 object-cover rounded-t-xl"
                />
                <Badge className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 flex items-center gap-1">
                  <FaTrophy className="text-yellow-300" /> {achievement.year}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-3 p-5">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaInfoCircle />
                  <span className="font-medium">Title:</span>
                  <span>{achievement.title}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <FaCalendarAlt />
                  <span className="font-medium">Date:</span>
                  <span>{new Date(achievement.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <FaMedal />
                  <span className="font-medium">Result:</span>
                  <span>{achievement.result}</span>
                </div>

                <Link
                  to={`/clubs/${id}/achievements-details/${achievement._id}`}
                >
                  <Button variant="default" className="w-full mt-2">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
