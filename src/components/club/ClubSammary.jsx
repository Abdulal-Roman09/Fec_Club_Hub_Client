import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import ClubSammarySkeleton from "../Skeleton/ClubSummarySkeleton";

const ClubSammary = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  // Fetch single club
  const {
    data: club,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["singleClubs", id],
    queryFn: async () => {
      const res = await get(`/singleClubs/${id}`);
      return res?.data || {};
    },
  });

  if (isLoading) return <ClubSammarySkeleton />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="space-y-4 p-4 bg-white shadow rounded">
      <h2 className="text-3xl font-bold">{club?.clubName}</h2>
      <h3 className="text-xl font-semibold">{club?.clubSortName}</h3>
      <img
        src={club?.clubLogo}
        alt={`${club?.clubName} Logo`}
        className="w-32 h-32 object-cover rounded-full"
      />

      <div className="flex">
        {" "}
        <div className="flex-1">
          <img
            src={club?.clubBanner}
            alt={`${club?.clubName} Banner`}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-700">
            <strong>Motto:</strong> {club?.clubMotto}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {club?.clubDescription}
          </p>
          <p className="text-gray-700">
            <strong>Category:</strong> {club?.clubCategory}
          </p>
          <p className="text-gray-500 text-sm">
            <strong>Created At:</strong>{" "}
            {club?.createdAt && new Date(club.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-500 text-sm">
            <strong>Updated At:</strong>{" "}
            {club?.updatedAt && new Date(club.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubSammary;
