"use client"

import { motion } from "framer-motion"

const premiumCigars = [
  "Cohiba Behike 56",
  "Padrón 1964 Anniversary",
  "Arturo Fuente Opus X",
  "Davidoff Winston Churchill",
  "My Father Le Bijou 1922",
  "Oliva Serie V Melanio",
  "Ashton ESG",
  "Montecristo No. 2",
  "Romeo y Julieta Churchill",
  "H. Upmann Magnum 46",
]

export function CigarMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0F1B2D] py-12">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />

      <div className="relative">
        {/* Label */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D4A574]">
            Premium Collection
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden">
          {/* First marquee */}
          <motion.div
            className="flex shrink-0 gap-12 pr-12"
            animate={{
              x: [0, -1920], // Adjust based on content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...premiumCigars, ...premiumCigars].map((cigar, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-4 whitespace-nowrap group cursor-pointer"
              >
                <span className="text-2xl">🚬</span>
                <span className="font-serif text-xl text-[#F0E6D2] group-hover:text-[#D4A574] transition-colors">
                  {cigar}
                </span>
                <span className="text-[#5F8575]">•</span>
              </div>
            ))}
          </motion.div>

          {/* Second marquee for seamless loop */}
          <motion.div
            className="flex shrink-0 gap-12 pr-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...premiumCigars, ...premiumCigars].map((cigar, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-4 whitespace-nowrap group cursor-pointer"
              >
                <span className="text-2xl">🚬</span>
                <span className="font-serif text-xl text-[#F0E6D2] group-hover:text-[#D4A574] transition-colors">
                  {cigar}
                </span>
                <span className="text-[#5F8575]">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0F1B2D] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0F1B2D] to-transparent pointer-events-none" />
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />
    </section>
  )
}
