import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllClubs = ({ clubs }) => {
  return (
    <section id="club-cards" className="bg-background-secondary py-16">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="font-header text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4">
          Our Clubs
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto">
          Discover amazing opportunities to learn, grow, and connect with
          like-minded students
        </p>
      </div>

      {/* Club Cards Grid */}
      <div className="container mx-auto px-4 sm:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border overflow-hidden"
            >
              {/* Club Logo */}
              <div className="relative overflow-hidden">
                <div className="overflow-hidden relative">
                  <img
                    className="h-48 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                    src={club.clubLogo}
                    alt={`${club.clubName} logo`}
                  />
                  <Badge
                    variant={"destructive"}
                    className="absolute top-4 right-4"
                  >
                    {club.clubCategory}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Club Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {club.clubName}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {club.clubMotto}
                </p>
                <Link
                  to={`/clubdetails/${club._id}`}
                  className="w-full block text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Visit Club
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllClubs;
