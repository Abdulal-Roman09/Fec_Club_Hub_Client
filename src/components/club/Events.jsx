import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  MapPin,
  Calendar,
  Link as LinkIcon,
  Users,
  Mic,
  Info,
  Plus,
} from "lucide-react";

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
      {/* Add member */}

      <div className="flex flex-col items-center justify-center space-y-4 ">
        <Link
          to={`/${id}/add-club-events`}
          className="flex flex-col items-center bg-green-400 py-10 px-20 rounded-2xl"
        >
          {/* Circle + Plus */}
          <div className="bg-green-50 w-40 h-40 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
            <Plus size={100} className="text-green-600" />
          </div>

          {/* Text */}
          <span className="text-gray-700 font-semibold text-xl mt-2">
            Add Events
          </span>
        </Link>
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
              <div className="flex-1 px-8 py-4 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Event Type */}
                  {event.type && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium ">
                      {event.type}
                    </span>
                  )}

                  {/* Event Title */}
                  <h3 className="text-3xl font-bold text-gray-800">
                    {event.title}
                  </h3>

                  {/* Event Details */}
                  <div className="text-sm text-gray-500 space-y-3 mt-2">
                    {event.organizerClub && (
                      <p className="flex items-center gap-1">
                        <Users className="w-4 h-4" /> Organizer:{" "}
                        {event.organizerClub}
                      </p>
                    )}
                    {event.speaker && (
                      <p className="flex items-center gap-1">
                        <Mic className="w-4 h-4" /> Speaker: {event.speaker}
                      </p>
                    )}
                    {event.location && (
                      <p className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> Location:{" "}
                        {event.location}
                      </p>
                    )}
                    {event.date && (
                      <p className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> eventDate:{" "}
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-8">
                  {event.registerLink && (
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
                    >
                      <LinkIcon className="w-5 h-5" /> Register
                    </a>
                  )}

                  <Link to={`/clubs/${id}/event-detetils/${event._id}`}>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition-colors">
                      <Info className="w-5 h-5" /> Details
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
