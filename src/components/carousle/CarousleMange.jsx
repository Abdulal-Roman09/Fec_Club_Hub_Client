import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Swal from "sweetalert2";

const CarouselManage = () => {
  const { get, del } = useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    data: carousel = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["carousel"],
    queryFn: async () => {
      const res = await get("/get-all-event-carousel");
      return res.events;
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await del(`/delete-event-carousel/${id}`);
        Swal.fire("Deleted!", "Event has been deleted.", "success");
        queryClient.invalidateQueries(["carousel"]);
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Failed to delete the event.", "error");
      }
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;
  if (carousel.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          No Banners Found
        </h2>
        <p className="text-gray-500">
          Currently, there are no carousel banners to display.
        </p>
      </div>
    );
  }

  return (
    <section className="container px-4 mx-auto">
      {/* Header */}
      <div className="flex items-center gap-x-3 mb-6">
        <h2 className="text-lg font-medium text-gray-800">Banner</h2>
        <span className="px-3 py-1 text-xs text-green-700 bg-green-100 rounded-full">
          {carousel.length} Banner{carousel.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 px-4 text-left text-sm font-normal text-gray-500">
                    <div className="flex items-center gap-x-3">
                      <span>Name</span>
                    </div>
                  </th>
                  <th className="px-12 py-3.5 text-left text-sm font-normal text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                    Category
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                    Manage
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {carousel.map((item) => (
                  <tr key={item._id}>
                    {/* Name & Image */}
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="w-30 h-16  object-cover"
                            src={item.image}
                            alt={item.eventTitle}
                          />
                          <div>
                            <h2 className="font-medium text-gray-800">
                              {item.eventTitle}
                            </h2>
                            <p className="text-sm text-gray-600">
                              {item.clubName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div>{item.status}</div>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {item.eventCategory}
                    </td>

                    {/* Manage Buttons */}
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-4">
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded focus:outline-none hover:bg-red-600"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselManage;
