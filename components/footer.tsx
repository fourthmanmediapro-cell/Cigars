export function Footer() {
  return (
    <footer id="contact" className="bg-[#0F0F0F] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* About & Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#FFFAF0]">
              The Reserve
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#8B8B8B]">
              Fort Worth&apos;s premier cigar lounge offering a sanctuary of
              sophistication and refinement since 2018.
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Hours
              </h4>
              <div className="mt-2 space-y-1 text-sm text-[#8B8B8B]">
                <p>Mon - Thu: 11am - 11pm</p>
                <p>Fri - Sat: 11am - 1am</p>
                <p>Sun: 12pm - 9pm</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                "Our Collection",
                "Membership",
                "Private Events",
                "Pairing Menu",
                "Gift Cards",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#8B8B8B] transition-colors hover:text-[#D4AF37]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Contact
            </h4>
            <div className="mt-4 space-y-2 text-sm text-[#8B8B8B]">
              <p>1234 Heritage Boulevard</p>
              <p>Fort Worth, TX 76102</p>
              <p className="mt-3">(817) 555-0192</p>
              <p>concierge@thereserve.com</p>
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#D4AF37] transition-colors hover:text-[#E8C84A]"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="text-[#D4AF37] transition-colors hover:text-[#E8C84A]"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Twitter/X */}
                <a
                  href="#"
                  className="text-[#D4AF37] transition-colors hover:text-[#E8C84A]"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#2A2A2A] pt-8 text-center">
          <p className="text-xs text-[#6B6B6B]">
            &copy; {new Date().getFullYear()} The Reserve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
