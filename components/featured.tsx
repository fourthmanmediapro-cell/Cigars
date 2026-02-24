const cigars = [
  {
    name: "Cohiba Behike 56",
    origin: "Cuba",
    strength: 4,
    description:
      "An exceptionally rare smoke with notes of cedar, espresso, and dark chocolate. The pinnacle of Cuban craftsmanship.",
  },
  {
    name: "Padr\u00F3n 1964 Anniversary",
    origin: "Nicaragua",
    strength: 3,
    description:
      "Box-pressed perfection delivering rich flavors of cocoa, roasted coffee, and a creamy finish that lingers beautifully.",
  },
  {
    name: "Arturo Fuente Opus X",
    origin: "Dominican Republic",
    strength: 5,
    description:
      "The crown jewel of Dominican cigars. Complex layers of spice, leather, and sweet undertones in every draw.",
  },
]

function StrengthIndicator({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs uppercase tracking-wider text-[#C4B5A5]">
        Strength
      </span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-4 rounded-full ${
              i < level ? "bg-[#D4AF37]" : "bg-[#4A3228]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function Featured() {
  return (
    <section id="selections" className="bg-[#2C1810] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Premium Selection
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#FFFAF0] lg:text-5xl">
            {"Curator's Choice"}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cigars.map((cigar) => (
            <div
              key={cigar.name}
              className="group rounded-lg border border-[#4A3228] bg-[#3A2218] p-8 transition-all duration-300 hover:border-[#D4AF37]"
            >
              <span className="inline-block rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                {cigar.origin}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-[#FFFAF0]">
                {cigar.name}
              </h3>
              <div className="mt-3">
                <StrengthIndicator level={cigar.strength} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#C4B5A5]">
                {cigar.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-semibold uppercase tracking-wider text-[#D4AF37] transition-colors hover:text-[#E8C84A]"
              >
                {"Learn More \u2192"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
