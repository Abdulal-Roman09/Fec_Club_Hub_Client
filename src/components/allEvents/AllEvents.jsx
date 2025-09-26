import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import FailedToFetch from "./../Error/FailedToFatch";
import Loading from "./../loading/Loading";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Link as LinkIcon,
  Users,
  Mic,
  Info,
} from "lucide-react";

const AllEvents = () => {
  const { id } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: events,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["clubEvents", id],
    queryFn: async () => {
      const res = await get(`/all-events`);
      console.log(res.data);
      return res?.data || [];
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  return (
    <>
      <Navbar />
      <div className="py-20">
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
                    {/* Event Details */}
                    <div className="text-sm text-gray-500 space-y-1 mt-2">
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
                      {event.registerLink && (
                        <p className="flex items-center gap-1">
                          <LinkIcon className="w-4 h-4" />{" "}
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
                        <p className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />EventDate:
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-4">
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

                      <Link
                        to={`/clubs/${event.clubId}/event-detetils/${event._id}`}
                      >
                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-300 transition-colors">
                          <Info className="w-5 h-5" /> Details
                        </button>
                      </Link>
                    </div>
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
      <Footer />
    </>
  );
};

export default AllEvents;
