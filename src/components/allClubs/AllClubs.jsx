import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Navbar from "../sheared/Navbar";

const AllClubsRoutes = () => {
  const { get } = useAxiosSecure();

  const {
    data: clubs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allClubs"],
    queryFn: async () => {
      const res = await get("/all-clubs");
      // console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <>
      <Navbar />
      <div className="mx-auto container pt-24">
        {/* Club Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mx-auto px-4">
          {clubs && clubs.length > 0 ? (
            clubs.map((club, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    className="h-48 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                    src={club.clubLogo}
                    alt={`${club.clubName} logo`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
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
