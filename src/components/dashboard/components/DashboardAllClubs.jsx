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

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleSearch = () => {
    setDebouncedSearch(search);
    setPage(1);
  };

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
    <div className="p-3 sm:p-6 md:p-8 w-full">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
        All Clubs ({data.total || 0})
      </h1>

      <div className="border-b border-gray-300"></div>

      {/* Search + Limit */}
      <div className="mt-5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3 sm:gap-4">
          {/* Search */}
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 h-4 w-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search clubs..."
                className="pl-10 w-full bg-gray-100 rounded-xl h-10 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm w-full sm:w-auto"
            >
              Search
            </button>
          </div>

          {/* Limit */}
          <select
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              setPage(1);
            }}
            className="border border-green-400 text-green-700 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-50 transition w-full sm:w-auto"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={15}>15 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>
      </div>

      {/* ✅ Only Table Scrollable (horizontal) */}
      <div className="mt-6 border border-gray-200 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100">
          <table className="min-w-[900px] sm:min-w-full text-xs sm:text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Logo</th>
                <th className="px-3 py-2">Club Name</th>
                <th className="px-3 py-2">Sort Name</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-3 py-2 hidden sm:table-cell">Motto</th>
                <th className="px-3 py-2">Banner</th>
                <th className="px-3 py-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {clubs.length > 0 ? (
                clubs.map((club, index) => (
                  <tr
                    key={club._id}
                    className="hover:bg-gray-50 text-center border-b"
                  >
                    <td className="py-2">{(page - 1) * limit + index + 1}</td>
                    <td>
                      <img
                        src={club.clubLogo}
                        alt={club.clubName}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border mx-auto object-cover"
                      />
                    </td>
                    <td className="font-medium truncate max-w-[120px]">
                      {club.clubName}
                    </td>
                    <td className="truncate max-w-[80px]">
                      {club.clubSortName}
                    </td>
                    <td>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        {club.clubCategory}
                      </span>
                    </td>
                    <td className="italic text-gray-500 hidden sm:table-cell truncate max-w-[150px]">
                      “{club.clubMotto}”
                    </td>
                    <td>
                      <img
                        src={club.clubBanner}
                        alt="banner"
                        className="w-20 h-10 sm:w-28 sm:h-14 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="flex justify-center items-center gap-2 py-2">
                      <Link
                        to={`/dashboard/club/${club._id}`}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(club._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-3 mt-5 bg-white p-3 rounded-lg shadow-md">
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

          <span className="px-4 py-2 font-medium text-green-700 text-sm sm:text-base">
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
