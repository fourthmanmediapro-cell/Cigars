export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://f005.backblazeb2.com/file/TRWdailyPuzzle/cigar+lounge.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#2C1810]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-[#FFFAF0] sm:text-6xl lg:text-7xl text-balance">
          Indulge in Timeless Elegance
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#C4B5A5] sm:text-xl">
          Premium cigars, rare spirits, and refined company in Fort Worth&apos;s
          most distinguished lounge
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#selections"
            className="rounded bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2C1810] transition-colors hover:bg-[#C4A030]"
          >
            View Collection
          </a>
          <a
            href="#contact"
            className="rounded border-2 border-[#D4AF37] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#2C1810]"
          >
            Book Experience
          </a>
        </div>
      </div>
    </section>
  )
}
