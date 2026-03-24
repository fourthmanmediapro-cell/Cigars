import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CigarMarquee } from "@/components/cigar-marquee"
import { About } from "@/components/about"
import { Featured } from "@/components/featured"
import { Memberships } from "@/components/memberships"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"
import MasonryPortfolio from "@/components/MasonryPortfolio"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CigarMarquee />
      <About />
      <Featured />
      <MasonryPortfolio />
      <Memberships />
      <Amenities />
      <Footer />
    </main>
  )
}
