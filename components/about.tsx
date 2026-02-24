import { Wine, Flame, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-[#FFFAF0] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
              Est. 2018
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] lg:text-5xl text-balance">
              A Sanctuary for Connoisseurs
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5C4033]">
              <p>
                Nestled in the heart of Fort Worth, The Reserve offers an
                unparalleled experience for those who appreciate the finer
                things. Our climate-controlled humidor houses over 500 premium
                selections from the world&apos;s most renowned regions.
              </p>
              <p>
                Whether you&apos;re a seasoned aficionado or just beginning your
                journey, our expert tobacconists are here to guide you through a
                curated selection of cigars, perfectly paired with rare spirits
                from our exclusive collection.
              </p>
              <p>
                Step into an atmosphere of warmth and sophistication, where every
                detail has been crafted to ensure an exceptional experience
                worthy of the discerning palate.
              </p>
            </div>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {[
              {
                icon: Flame,
                title: "500+ Cigars",
                desc: "Hand-selected from the world's finest growing regions",
              },
              {
                icon: Wine,
                title: "Rare Spirits",
                desc: "An exclusive bar featuring vintage whiskeys and cognacs",
              },
              {
                icon: Users,
                title: "Expert Staff",
                desc: "Certified tobacconists to curate your perfect experience",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-lg border border-[#E8DDD0] bg-[#FFF8F0] p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2C1810]">
                  <item.icon className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#5C4033]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
