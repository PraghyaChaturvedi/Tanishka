import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.2em] uppercase pl-3">
              Fine Arts & Design
            </p>

            <h1
              className={`${outfit.className} text-4xl md:text-7xl tracking-tight leading-tight`}
            >
              Tanishka Agarwal
            </h1>

            <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Fine Arts student specializing in multidisciplinary design, branding, and visual storytelling
            </p>

            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden scale-in">
            <img
              src="/professional-portrait-of-young-female-artist-in-el.jpg"
              alt="Tanishka Agarwal"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
