import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";

export const DashboardAllClubs = () => {
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

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;
  

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          All Clubs ({clubs.length})
        </h1>

        <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
          <table className="table w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Logo</th>
                <th className="px-4 py-3">Club Name</th>
                <th className="px-4 py-3">Sort Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Motto</th>
                <th className="px-4 py-3">Banner</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clubs.length > 0 ? (
                clubs.map((club, index) => (
                  <tr
                    key={club._id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    {/* Index */}
                    <td className="px-4 py-3 text-center font-medium text-gray-700">
                      {index + 1}
                    </td>

                    {/* Logo */}
                    <td className="px-4 py-3 text-center">
                      <img
                        src={club.clubLogo}
                        alt={club.clubName}
                        className="w-12 h-12 object-cover rounded-full border shadow-sm"
                      />
                    </td>

                    {/* Club Name */}
                    <td className="px-4 py-3 font-semibold text-gray-800">
                      {club.clubName}
                    </td>

                    {/* Sort Name */}
                    <td className="px-4 py-3 text-gray-600">
                      {club.clubSortName}
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {club.clubCategory}
                      </span>
                    </td>

                    {/* Motto */}
                    <td className="px-4 py-3 italic text-gray-500">
                      “{club.clubMotto}”
                    </td>

                    {/* Banner */}
                    <td className="px-4 py-3">
                      <img
                        src={club.clubBanner}
                        alt={club.clubName}
                        className="w-28 h-14 object-cover rounded-lg border"
                      />
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 text-center space-x-2">
                      <Link
                        to={`/dashboard/club/${club._id}`}
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md text-sm transition duration-200"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(club._id)}
                        className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md text-sm transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No clubs found 🚫
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
