import { Check } from "lucide-react"

const tiers = [
  {
    name: "Premium",
    price: "$149",
    featured: false,
    benefits: [
      "Access to members-only lounge",
      "10% discount on all purchases",
      "Monthly cigar tasting event",
      "Personal humidor locker",
    ],
  },
  {
    name: "Platinum",
    price: "$299",
    featured: false,
    benefits: [
      "All Premium benefits",
      "Priority event reservations",
      "Quarterly rare cigar sampler",
      "Private lounge access (2x/month)",
      "Complimentary spirit pairings",
    ],
  },
  {
    name: "Elite",
    price: "$499",
    featured: true,
    benefits: [
      "All Platinum benefits",
      "Unlimited private lounge access",
      "Annual trip to cigar region",
      "Dedicated personal tobacconist",
      "Exclusive limited edition releases",
    ],
  },
]

export function Memberships() {
  return (
    <section id="memberships" className="bg-[#FFFAF0] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Exclusive Access
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#2C1810] lg:text-5xl">
            Join The Reserve
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-lg border p-8 transition-all duration-300 ${
                tier.featured
                  ? "border-[#D4AF37] bg-[#2C1810] shadow-xl shadow-[#D4AF37]/10"
                  : "border-[#E8DDD0] bg-[#FFF8F0]"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2C1810]">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-serif text-2xl font-bold ${
                  tier.featured ? "text-[#D4AF37]" : "text-[#2C1810]"
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    tier.featured ? "text-[#FFFAF0]" : "text-[#2C1810]"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.featured ? "text-[#C4B5A5]" : "text-[#8B7B6B]"
                  }`}
                >
                  /month
                </span>
              </div>
              <ul className="mt-8 space-y-4">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.featured ? "text-[#D4AF37]" : "text-[#8B4513]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.featured ? "text-[#C4B5A5]" : "text-[#5C4033]"
                      }`}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded py-3 text-center text-sm font-semibold uppercase tracking-wider transition-colors ${
                  tier.featured
                    ? "bg-[#D4AF37] text-[#2C1810] hover:bg-[#C4A030]"
                    : "border-2 border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#FFFAF0]"
                }`}
              >
                Inquire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
