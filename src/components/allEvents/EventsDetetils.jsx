import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";

const EventsDetetils = () => {
  const { clubId, eventId } = useParams();
  const { get } = useAxiosSecure();

  const {
    data: event,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["singleEvent", clubId, eventId],
    queryFn: async () => {
      const res = await get(`/clubs/${clubId}/event-detetils/${eventId}`);
      console.log(res.data);
      return res?.data || null;
    },
  });

  if (isLoading) return <Loading />;
  if (isError || !event) return <FailedToFetch />;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 space-y-6">
        {/* Banner */}
        {event.banner && (
          <img
            src={event.banner}
            alt={event.title}
            className="w-full h-72 object-cover rounded-2xl"
          />
        )}

        {/* Main Info */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{event.title}</h1>
          <p className="text-gray-700">{event.description}</p>
        </div>

        {/* Event Details */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-2 text-gray-600">
          {event.organizerClub && <p>🏛 Organizer: {event.organizerClub}</p>}
          {event.speaker && <p>🎤 Speaker: {event.speaker}</p>}
          {event.location && <p>📍 Location: {event.location}</p>}
          {event.registerLink && (
            <p>
              🔗 Register Link:{" "}
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
          {event.registerDeadline && (
            <p>⏰ Register Deadline: {new Date(event.registerDeadline).toLocaleString()}</p>
          )}
          {event.date && <p>📅 Event Date: {new Date(event.date).toLocaleString()}</p>}
          {event.clubId && <p>🆔 Club ID: {event.clubId}</p>}
          {<p>📝 Event ID: {event._id}</p>}
          {event.createdAt && <p>🗓 Created At: {new Date(event.createdAt).toLocaleString()}</p>}
          {event.updatedAt && <p>✏️ Updated At: {new Date(event.updatedAt).toLocaleString()}</p>}
        </div>

        {/* Register Button */}
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
      </div>
      <Footer />
    </>
  );
};

export default EventsDetetils;
