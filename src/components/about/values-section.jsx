import { Lightbulb, Users, Target, Sparkles } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and push boundaries to create meaningful impact.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collaboration and supporting each other.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    description: "We foster an environment where creative thinking thrives.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-0 lg:px-0">
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
