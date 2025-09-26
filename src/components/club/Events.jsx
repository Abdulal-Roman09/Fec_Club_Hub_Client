import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import { Link, useParams } from "react-router-dom";
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
      // console.log(res.data);
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto container px-4 md:px-0 lg:px-0">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row"
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
                <div className="space-y-3">
                  {/* Event Type */}
                  {event.type && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  )}

                  {/* Event Title */}
                  <h3 className="text-3xl font-bold text-gray-800">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="text-sm text-gray-500 space-y-1 mt-2">
                    {event.organizerClub && (
                      <p>🏛 Organizer: {event.organizerClub}</p>
                    )}
                    {event.speaker && <p>🎤 Speaker: {event.speaker}</p>}
                    {event.location && <p>📍 Location: {event.location}</p>}
                    {event.registerLink && (
                      <p>
                        🔗 Link:{" "}
                        <a
                          href={event.registerLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {event.registerLink}
                        </a>
                      </p>
                    )}
                    {event.date && (
                      <p>
                        📅 Date: {new Date(event.date).toLocaleDateString()}
                      </p>
                    )}
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
                      Register
                    </a>
                  )}

                  <Link to={`/clubs/${id}/event-detetils/${event._id}`}>
                    <button
                      className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition-colors"
                      onClick={() => JSON.stringify(event, null, 2)}
                    >
                      Details
                    </button>
                  </Link>
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
