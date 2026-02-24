import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Featured } from "@/components/featured"
import { Memberships } from "@/components/memberships"
import { Amenities } from "@/components/amenities"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Memberships />
      <Amenities />
      <Footer />
    </main>
  )
}
