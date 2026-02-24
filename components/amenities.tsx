import { Thermometer, Wine, DoorOpen, MessageCircle } from "lucide-react"

const amenities = [
  {
    icon: Thermometer,
    title: "Climate-Controlled Humidor",
    desc: "State-of-the-art walk-in humidor maintaining perfect temperature and humidity for over 500 selections.",
  },
  {
    icon: Wine,
    title: "Rare Spirits Bar",
    desc: "An exclusive collection of vintage whiskeys, aged cognacs, and fine wines curated for perfect pairings.",
  },
  {
    icon: DoorOpen,
    title: "Private Lounges",
    desc: "Intimate private rooms with leather seating, personal humidors, and dedicated service staff.",
  },
  {
    icon: MessageCircle,
    title: "Expert Consultations",
    desc: "Certified tobacconists available for personalized recommendations and guided tasting sessions.",
  },
]

export function Amenities() {
  return (
    <section id="events" className="bg-[#2C1810] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            World-Class Facilities
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#FFFAF0] lg:text-5xl">
            The Experience
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#4A3228] bg-[#3A2218] transition-colors group-hover:border-[#D4AF37]">
                <item.icon className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-[#FFFAF0]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#C4B5A5]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
