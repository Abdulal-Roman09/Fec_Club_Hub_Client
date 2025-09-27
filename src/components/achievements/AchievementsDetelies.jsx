import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";

const AchievementsDetelies = () => {
  const { clubId, achievementId } = useParams();
  console.log(clubId, achievementId);
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
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{achievement.title}</h1>
      <p className="text-gray-600">Year: {achievement.year}</p>
      <p className="text-gray-600">
        Date: {new Date(achievement.date).toDateString()}
      </p>
      <p className="mt-2">{achievement.description}</p>
      <p className="text-gray-500 mt-1">
        Location: {achievement.eventLocation}
      </p>
    </div>
  );
};

export default AchievementsDetelies;
