import { Link } from "react-router-dom";
const AllClubs = ({ clubs }) => {
  const getCategoryColors = (category) => {
    switch (category) {
      case "Technology":
        return {
          accent: "bg-success",
          text: "text-success",
          border: "border-success/20",
          hover: "hover:bg-success/10",
          fill: "hover:fill-success",
        };
      case "Innovation":
        return {
          accent: "bg-innovation",
          text: "text-innovation",
          border: "border-innovation/20",
          hover: "hover:bg-innovation/10",
          fill: "hover:fill-innovation",
        };
      case "Creative":
        return {
          accent: "bg-cultural",
          text: "text-cultural",
          border: "border-cultural/20",
          hover: "hover:bg-cultural/10",
          fill: "hover:fill-cultural",
        };
      case "Cultural":
        return {
          accent: "bg-cultural",
          text: "text-cultural",
          border: "border-cultural/20",
          hover: "hover:bg-cultural/10",
          fill: "hover:fill-cultural",
        };
      case "Academic":
        return {
          accent: "bg-club-accent",
          text: "text-club-accent",
          border: "border-club-accent/20",
          hover: "hover:bg-club-accent/10",
          fill: "hover:fill-club-accent",
        };
      case "Professional":
        return {
          accent: "bg-primary",
          text: "text-primary",
          border: "border-primary/20",
          hover: "hover:bg-primary/10",
          fill: "hover:fill-primary",
        };
      case "Religious":
        return {
          accent: "bg-technology",
          text: "text-technology",
          border: "border-technology/20",
          hover: "hover:bg-technology/10",
          fill: "hover:fill-technology",
        };
      case "Community":
        return {
          accent: "bg-error-secondary",
          text: "text-error-secondary",
          border: "border-error-secondary",
          hover: "hover:bg-error-secondary/10",
          fill: "hover:fill-error-secondary",
        };
      default:
        return {
          accent: "bg-primary",
          text: "text-primary",
          border: "border-primary/20",
          hover: "hover:bg-primary/10",
          fill: "hover:fill-primary",
        };
    }
  };

  return (
    <div
      id="club-cards"
      className="flex flex-col items-center w-full h-auto overflow-hidden bg-background-secondary py-12"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-header text-6xl font-bold text-text mb-4">
          Our Clubs
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Discover amazing opportunities to learn, grow, and connect with
          like-minded students
        </p>
      </div>

      {/* Club Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[90%] mx-auto px-4">
        {clubs && clubs.length > 0 ? (
          clubs.map((club, index) => {
            const colors = getCategoryColors(club.clubCategory);
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    className="h-48 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                    src={club.clubLogo}
                    alt={`${club.clubName} logo`}
                  />
                  {/* Category Badge */}
                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${colors.accent} shadow-lg`}
                  >
                    {club.clubCategory}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                    {club.clubName}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {club.clubMotto}
                  </p>

                  <div className="flex justify-between items-center">
                    <Link
                      to={`/clubdetails/${club._id}`}
                      className="w-full block text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Visit Club
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No clubs available.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllClubs;
