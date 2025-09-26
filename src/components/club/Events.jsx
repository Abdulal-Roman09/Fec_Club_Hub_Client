import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Events = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: events,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["clubEvents", id],
    queryFn: async () => {
      const res = await get(`/single-club-event/${id}`);
      console.log(res.data); // check response
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <div className="py-2">
      <div className="text-center mb-8">
        <h2 className="font-header text-5xl font-bold text-charcoal mb-4">
          Club Events
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row"
            >
              {/* Banner Image */}
              {event.banner && (
                <img
                  src={event.banner}
                  alt={event.title}
                  className="flex-1 w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
              )}

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 line-clamp-4">
                    {event.description}
                  </p>

                  <div className="text-sm text-gray-500 space-y-1 mt-2">
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>📍 {event.location}</p>
                    {event.speaker && <p>🎤 {event.speaker}</p>}
                    {event.organizerClub && <p>🏛 {event.organizerClub}</p>}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  {event.registerLink && (
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
                    >
                      Details
                    </a>
                  )}

                  <button
                    className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                    onClick={() => alert(JSON.stringify(event, null, 2))}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-text-secondary text-center text-xl">
            No club events yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
