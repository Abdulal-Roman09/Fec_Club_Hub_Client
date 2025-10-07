import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../loading/Loading";
import FailedToFetch from "../../Error/FailedToFatch";
import Swal from "sweetalert2";
import { Search } from "lucide-react";
import DynamicTable from "../../table/DynamicTable";

export const DashboardAllClubs = () => {
  const { get, del } = useAxiosSecure();
  const queryClient = useQueryClient();

  // Search & Pagination
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleSearch = () => {
    setDebouncedSearch(search);
    setPage(1);
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
      Swal.fire("Deleted!", "Your club has been deleted.", "success");
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

  // Columns for DynamicTable
  const columns = [
    {
      accessor: "index",
      header: "#",
      align: "center",
      render: (_, __, idx) => (page - 1) * limit + idx + 1,
    },
    {
      accessor: "clubLogo",
      header: "Logo",
      align: "center",
      render: (logo) => (
        <img src={logo} alt="logo" className="w-12 h-12 rounded-full border" />
      ),
    },
    { accessor: "clubName", header: "Club Name" },
    { accessor: "clubSortName", header: "Sort Name" },
    {
      accessor: "clubCategory",
      header: "Category",
      render: (category) => (
        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
          {category}
        </span>
      ),
    },
    {
      accessor: "clubMotto",
      header: "Motto",
      render: (motto) => (
        <span className="italic text-gray-500">“{motto}”</span>
      ),
    },
    {
      accessor: "clubBanner",
      header: "Banner",
      render: (banner) => (
        <img
          src={banner}
          alt="banner"
          className="w-28 h-14 object-cover rounded-md"
        />
      ),
    },
  ];

  // Actions
  const actions = [
    {
      label: "View",
      className: "bg-green-500 hover:bg-green-600 text-white",
      onClick: (row) => (window.location.href = `/dashboard/club/${row._id}`),
    },
    {
      label: "Delete",
      className: "bg-red-500 hover:bg-red-600 text-white",
      onClick: (row) => handleDelete(row._id),
    },
  ];

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        All Clubs ({data.total || 0})
      </h1>

      <div className="border-b border-gray-300 mb-4"></div>

      {/* Search & Limit */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <div className="flex-1 max-w-lg mx-6 flex flex-col sm:flex-row items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 h-4 w-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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

        <select
          value={limit}
          onChange={(e) => {
            setLimit(parseInt(e.target.value));
            setPage(1);
          }}
          className="border border-green-400 text-green-700 px-3 py-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-50 transition-colors"
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={15}>15 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>

      {/* Dynamic Table */}
      <DynamicTable
        columns={columns}
        data={clubs}
        actions={actions}
        page={page}
        limit={limit}
      />

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
