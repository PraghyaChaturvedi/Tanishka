import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Experience } from "@/components/experience"
import { Leadership } from "@/components/leadership"
import { Learning } from "@/components/learning"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Experience />
      <Leadership />
      <Learning />
      <Contact />
    </main>
  )
}
