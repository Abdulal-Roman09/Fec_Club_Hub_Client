import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";
import Swal from "sweetalert2";
import { Search } from "lucide-react";

export const DashboardAllClubs = () => {
  const { get, del } = useAxiosSecure();
  const queryClient = useQueryClient();

  // Search, Pagination, Limit
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Handle search (button click or Enter)
  const handleSearch = () => {
    setDebouncedSearch(search);
    setPage(1); // Reset page on new search
  };

  // Fetch clubs
  const {
    data = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-clubs", debouncedSearch, page, limit],
    queryFn: async () => {
      const res = await get(
        `all-clubs?search=${debouncedSearch}&page=${page}&limit=${limit}`
      );
      return res || { clubs: [], total: 0, totalPage: 0 };
    },
    keepPreviousData: true,
  });

  const clubs = data.clubs || [];
  const totalPages = data.totalPage || 1;

  // Delete club
  const deleteMutation = useMutation({
    mutationFn: async (id) => await del(`delete-club/${id}`),
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your club has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries(["all-clubs"]);
    },
    onError: () => {
      Swal.fire("Error", "Failed to delete club", "error");
    },
  });

  const handleDelete = (id) => {
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
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        All Clubs ({data.total || 0})
      </h1>
      {/* divider */}
      <div className="border-b border-gray-300"></div>
      {/* Search & Limit */}
      <div className="mt-5 pr-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
          {/* Search Input */}
          <div className="flex-1 max-w-lg mx-6 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 h-4 w-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search clubs ..."
                className="pl-10 w-full bg-gray-300 rounded-xl h-10 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm"
            >
              Search
            </button>
          </div>

          {/* Limit select */}
          <select
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              setPage(1);
            }}
            className="border border-green-400 text-green-700 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-00 hover:bg-green-50 transition-colors"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={15}>15 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>
      </div>

      {/* Clubs Table */}
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
                  <td className="text-center">
                    {(page - 1) * limit + index + 1}
                  </td>
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
                      onClick={() => handleDelete(club._id)}
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-4 bg-white p-3 rounded-lg shadow-md">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Prev
          </button>

          <span className="px-4 py-2 font-medium text-green-700">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
