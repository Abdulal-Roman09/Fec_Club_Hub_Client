const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-0 lg:px-0">
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center text-balance">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            Our dedicated team works tirelessly to create amazing experiences for all our members.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-square">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-green-100 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
