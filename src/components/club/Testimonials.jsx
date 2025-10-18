import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "../loading/Loading";
import FailedToFetch from "../Error/FailedToFatch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Plus } from "lucide-react";
import useUserRole from "@/hooks/useUserRole";

const Testimonials = () => {
  const { get } = useAxiosSecure();
  // clubid
  const { id: clubId } = useParams();
  console.log("club id :", clubId);
  const { userId } = useUserRole();
  console.log("user id", userId);

  //  Fetch testimonials from backend
  const {
    data: clubTestimonials = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["clubTestimonials"],
    queryFn: async () => {
      const res = await get("/get-all-tastimonial");
      return res.data;
    },
  });

  //  Loading & Error states
  if (isLoading) return <Loading />;
  if (isError) return <FailedToFetch />;

  //  Empty state
  if (clubTestimonials.length === 0)
    return (
      <div className="text-center text-lg text-gray-500 py-10">
        No testimonials available yet.
      </div>
    );

  return (
    <section className="space-y-10 py-10">
      {/* ===== Header Section ===== */}
      <div className="text-center mb-10">
        <h2 className="font-header text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Member Testimonials
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our members about their experiences and how FECRIC has
          impacted their journey.
        </p>
      </div>

      {/* ===== Testimonials Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {clubTestimonials.map((testimonial) => (
          <Card
            key={testimonial._id || testimonial.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white"
          >
            <CardHeader className="text-center pt-6 pb-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto border-1 border-green-100 group-hover:border-green-500 transition-all duration-200"
              />
              <CardTitle className="mt-3 text-lg font-semibold text-gray-800">
                {testimonial.name}
              </CardTitle>
              <CardDescription className="text-green-600 font-medium">
                {testimonial.role}
              </CardDescription>
              <p className="text-sm text-gray-500">{testimonial.clubName}</p>
            </CardHeader>

            <CardContent className="text-center px-6 pb-6">
              <blockquote className="text-gray-600 italic mt-3 leading-relaxed">
                “{testimonial.message}”
              </blockquote>
            </CardContent>

            {/* Accent underline */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        ))}
      </div>
      {/* Add member */}

      <div className="flex flex-col items-center justify-center space-y-4 ">
        <Link
          to={`/${clubId}/add-testimonial/${userId}`}
          className="flex flex-col items-center bg-green-500 py-10 px-20 rounded-2xl"
        >
          {/* Circle + Plus */}
          <div className="bg-green-50 w-40 h-40 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
            <Plus size={100} className="text-green-600" />
          </div>

          {/* Text */}
          <span className="text-gray-700 font-semibold text-xl mt-2">
            Add Testimonial
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
