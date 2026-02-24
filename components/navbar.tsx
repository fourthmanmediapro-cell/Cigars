"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const cigarDropdown = {
  "By Origin": [
    "Cuban Selection",
    "Dominican Collection",
    "Nicaraguan Reserves",
    "Honduran Classics",
  ],
  "By Strength": [
    "Mild & Mellow",
    "Medium Bodied",
    "Full Strength",
    "Limited Editions",
  ],
  Experience: [
    "Beginner's Guide",
    "Pairing Menu",
    "Private Tastings",
    "Humidor Tours",
  ],
}

const navLinks = ["Home", "Cigars", "Memberships", "Events", "Contact"]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C1810]/95 backdrop-blur-sm border-b border-[#4A3228]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Brand */}
          <a href="#" className="font-serif text-2xl font-bold tracking-wide text-[#FFFAF0]">
            The Reserve
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link === "Cigars" ? (
                <div key={link} className="group relative">
                  <button className="text-sm font-medium uppercase tracking-widest text-[#C4B5A5] transition-colors hover:text-[#D4AF37]">
                    Cigars
                  </button>
                  <div className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="w-[700px] rounded-lg bg-[#FFFAF0] p-8 shadow-xl">
                      <div className="grid grid-cols-3 gap-8">
                        {Object.entries(cigarDropdown).map(
                          ([heading, items]) => (
                            <div key={heading}>
                              <h4 className="mb-3 font-serif text-sm font-bold uppercase tracking-widest text-[#2C1810]">
                                {heading}
                              </h4>
                              <ul className="space-y-2">
                                {items.map((item) => (
                                  <li key={item}>
                                    <a
                                      href="#"
                                      className="block text-sm text-[#8B4513] transition-colors hover:text-[#D4AF37]"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-widest text-[#C4B5A5] transition-colors hover:text-[#D4AF37]"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden rounded bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#2C1810] transition-colors hover:bg-[#C4A030] lg:inline-block"
            >
              Reserve Your Seat
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#FFFAF0] lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#4A3228] bg-[#2C1810] px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-[#C4B5A5] transition-colors hover:text-[#D4AF37]"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block rounded bg-[#D4AF37] px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-[#2C1810]"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
