import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Footer from "../sheared/Footer";
import Navbar from "../sheared/Navbar";
import {
  FaCalendarAlt,
  FaTrophy,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaMedal,
} from "react-icons/fa";

const AchievementsDetelies = () => {
  const { clubId, achievementId } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: achievement,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["achievement", clubId, achievementId],
    queryFn: async () => {
      const res = await get(
        `/clubs/${clubId}/achievements-details/${achievementId}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <>
      <Navbar />
      <div className="mx-auto container py-20 px-4">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-3xl mx-auto">
          {/* Image section */}
          {achievement.image && (
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-64 object-cover"
            />
          )}

          {/* Content section */}
          <div className="p-6 space-y-5">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaInfoCircle className="text-green-600" />
              {achievement.title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt className="text-green-600" />
              <span className="font-medium">Date:</span>
              <span>{new Date(achievement.date).toDateString()}</span>
            </div>

            {/* Year */}
            <div className="flex items-center gap-2 text-gray-700">
              <FaTrophy className="text-yellow-500" />
              <span className="font-medium">Year:</span>
              <span>{achievement.year}</span>
            </div>

            {/* Result */}
            {achievement.result && (
              <div className="flex items-center gap-2 text-gray-700">
                <FaMedal className="text-blue-500" />
                <span className="font-medium">Result:</span>
                <span>{achievement.result}</span>
              </div>
            )}

            {/* Location */}
            {achievement.eventLocation && (
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="font-medium">Location:</span>
                <span>{achievement.eventLocation}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AchievementsDetelies;
