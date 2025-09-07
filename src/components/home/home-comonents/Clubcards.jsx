import { Link } from "react-router-dom";

const AllClubs = ({ clubs }) => {
  const fallbackClubs = [
    {
      _id: "68bd7101a49aba18c5901908",
      clubName: "Institute of Electrical and Electronics Engineers",
      clubSortName: "IEEE",
      clubDescription:
        "IEEE is a global professional association dedicated to advancing innovation and technological excellence for the benefit of humanity. The club organizes workshops, technical events, and competitions for students.",
      clubMotto: "Advancing Technology for Humanity",
      clubCategory: "Technology",
      clubLogo: "https://example.com/logos/ieee.png",
      clubBanner: "https://example.com/banners/ieee-banner.jpg",
      createdAt: "2025-09-07T11:48:17.839Z",
      updatedAt: "2025-09-07T11:48:17.839Z",
    },
  ];

  const displayClubs = clubs && clubs.length > 0 ? clubs : fallbackClubs;

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
        {displayClubs.map((club, index) => (
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
              {/* Category Badge - Single Color */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-green-600 shadow-lg">
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
        ))}
      </div>
    </div>
  );
};

export default AllClubs;
