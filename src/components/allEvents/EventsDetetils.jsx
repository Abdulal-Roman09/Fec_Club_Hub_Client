import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import Navbar from "../sheared/Navbar";
import Footer from "../sheared/Footer";
import {
  MapPin,
  Calendar,
  Link as LinkIcon,
  Users,
  Mic,
  Clock,
  Info,
  Edit,
} from "lucide-react";

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
          {event.organizerClub && (
            <p className="flex items-center gap-1">
              <Users className="w-5 h-5" /> Organizer: {event.organizerClub}
            </p>
          )}
          {event.speaker && (
            <p className="flex items-center gap-1">
              <Mic className="w-5 h-5" /> Speaker: {event.speaker}
            </p>
          )}
          {event.location && (
            <p className="flex items-center gap-1">
              <MapPin className="w-5 h-5" /> Location: {event.location}
            </p>
          )}
          {event.registerLink && (
            <p className="flex items-center gap-1">
              <LinkIcon className="w-5 h-5" /> Register Link:{" "}
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
            <p className="flex items-center gap-1">
              <Clock className="w-5 h-5" /> Register Deadline:{" "}
              {new Date(event.registerDeadline).toLocaleString()}
            </p>
          )}
          {event.date && (
            <p className="flex items-center gap-1">
              <Calendar className="w-5 h-5" /> Event Date:{" "}
              {new Date(event.date).toLocaleString()}
            </p>
          )}
          {event.clubId && (
            <p className="flex items-center gap-1">
              <Info className="w-5 h-5" /> Club ID: {event.clubId}
            </p>
          )}
          <p className="flex items-center gap-1">
            <Edit className="w-5 h-5" /> Event ID: {event._id}
          </p>
          {event.createdAt && (
            <p className="flex items-center gap-1">
              <Calendar className="w-5 h-5" /> Created At:{" "}
              {new Date(event.createdAt).toLocaleString()}
            </p>
          )}
          {event.updatedAt && (
            <p className="flex items-center gap-1">
              <Edit className="w-5 h-5" /> Updated At:{" "}
              {new Date(event.updatedAt).toLocaleString()}
            </p>
          )}
        </div>

        {/* Register Button */}
        {event.registerLink && (
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mx-auto gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
          >
            <LinkIcon className="w-5 h-5" /> Register
          </a>
        )}
      </div>
      <Footer />
    </>
  );
};

export default EventsDetetils;
