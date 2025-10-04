import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";
import Swal from "sweetalert2";

export const DashboardAllClubs = () => {
  const { get, del } = useAxiosSecure();
  const queryClient = useQueryClient();

  // Get clubs
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
  // ract query using delet
  const deleteMution = useMutation({
    mutationFn: async (id) => {
      const res = await del(`delete-club/${id}`);
      return res;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries(["all-clubs"]);
    },
    onError: () => {
      Swal.fire("error", "Filded to delete club", "error");
    },
  });
  // hendel delet club
  const hendelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMution.mutate(id);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        All Clubs ({clubs.length})
      </h1>

      <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
        <table className="table w-full text-sm">
          <thead className="bg-green-600 text-white">
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Club Name</th>
              <th>Sort Name</th>
              <th>Category</th>
              <th>Motto</th>
              <th>Banner</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clubs.length > 0 ? (
              clubs.map((club, index) => (
                <tr key={club._id} className="hover:bg-gray-50">
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <img
                      src={club.clubLogo}
                      alt={club.clubName}
                      className="w-12 h-12 rounded-full border"
                    />
                  </td>
                  <td>{club.clubName}</td>
                  <td>{club.clubSortName}</td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {club.clubCategory}
                    </span>
                  </td>
                  <td className="italic text-gray-500">“{club.clubMotto}”</td>
                  <td>
                    <img
                      src={club.clubBanner}
                      alt="banner"
                      className="w-28 h-14 object-cover rounded-md"
                    />
                  </td>
                  <td className="text-center space-x-2">
                    <Link
                      to={`/dashboard/club/${club._id}`}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => hendelDelete(club._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No clubs found 🚫
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
