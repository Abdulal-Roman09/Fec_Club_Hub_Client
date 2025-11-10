import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Navbar from "../sheared/navber/Navbar";
import ClubSkeleton from "../Skeleton/ClubSkeletion";

const AllClubsRoutes = () => {
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

  if (isLoading) return <ClubSkeleton />;
  if (isError) return <FailedToFetch />;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-0  pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clubs.length > 0 ? (
            clubs.map((club, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Club Logo */}
                <div className="relative overflow-hidden">
                  <img
                    className="h-48 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                    src={club.clubLogo}
                    alt={`${club.clubName} logo`}
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-green-600 shadow-lg">
                    {club.clubCategory}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Club Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {club.clubName}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {club.clubMotto}
                  </p>
                  <Link
                    to={`/clubdetails/${club._id}`}
                    className="w-full block text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Visit Club
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No clubs available.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AllClubsRoutes;
