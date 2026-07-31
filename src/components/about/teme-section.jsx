const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "President",
    registration: "CSE-210101",
    session: "2021-22",
    department: "Computer Science & Engineering",
    teamName: "Executive Committee",
    email: "sarah.johnson@example.com",
    phone: "+8801712345678",
    facebook: "https://facebook.com/sarahjohnson",
    bio: "Leads the club and oversees all activities and decision-making.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    registration: "CSE-210102",
    session: "2021-22",
    department: "Computer Science & Engineering",
    teamName: "Executive Committee",
    email: "michael.chen@example.com",
    phone: "+8801812345678",
    facebook: "https://facebook.com/michaelchen",
    bio: "Supports the president and manages club events and operations.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Technical Lead",
    registration: "CSE-210103",
    session: "2021-22",
    department: "Computer Science & Engineering",
    teamName: "Development Team",
    email: "emily.rodriguez@example.com",
    phone: "+8801912345678",
    facebook: "https://facebook.com/emilyrodriguez",
    bio: "Develops and maintains the club website and technical systems.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Meet Our Team
          </h2>

          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the three members who lead our club with passion, creativity,
            and technical excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{member.name}</h3>

                  <p className="text-green-600 font-semibold mb-4">
                    {member.role}
                  </p>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>Registration:</strong> {member.registration}
                    </p>

                    <p>
                      <strong>Session:</strong> {member.session}
                    </p>

                    <p>
                      <strong>Department:</strong> {member.department}
                    </p>

                    <p>
                      <strong>Team:</strong> {member.teamName}
                    </p>

                    <p>
                      <strong>Email:</strong> {member.email}
                    </p>

                    <p>
                      <strong>Phone:</strong> {member.phone}
                    </p>

                    <p>
                      <strong>Facebook:</strong>{" "}
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Profile
                      </a>
                    </p>
                  </div>

                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
