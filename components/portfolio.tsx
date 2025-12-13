"use client"
import { PortfolioCategory } from "./portfolio-category"

const portfolioCategories = [
  {
    title: "Lines That Speak",
    description: "Sketching, live sketches, still life, perspective, portrait, compositions",
    images: [
      "/pencil-sketch-still-life-art.jpg",
      "/live-portrait-sketch.jpg",
      "/perspective-architectural-drawing.jpg",
      "/charcoal-figure-drawing.jpg",
    ],
  },
  {
    title: "Make Them Look",
    description: "Poster designing",
    images: ["/poster/design 2.jpg", "/poster/buisness poster.jpg",
"/poster/composition 2.jpg",
"/poster/composition 3.jpg",
"/poster/composition 5.jpg",
"/poster/design 2.jpg",
"/poster/design 3.jpg",
"/poster/design 4.jpg",
"/poster/design 5.jpg",
"/poster/design 6.jpg",
"/poster/design.jpg",
"/poster/education poster.jpg",
"/poster/farewell invite 1-Recovered.jpg",
"/poster/fireless cooking poster design.jpg",
"/poster/ganesh chaturthi invite.jpg",
"/poster/illustration 1.jpg",
"/poster/illustration 2.jpg",
"/poster/movie poster recreate 2.jpg",
"/poster/movie-poster-recreate-1.jpeg",
"/poster/poster making.jpg",
"/poster/sofa add poster.jpg"
],
  },
  {
    title: "Fresh Look, Same Core: ZUDIO",
    description: "Re-branding",
    images: ["/zudio-rebranding-design.jpg", "/brand-identity-mockup.jpg", "/rebranding-presentation.jpg"],
  },
  {
    title: "Brand Marks Study",
    description: "Logo designing and logo book",
    images: ["/modern-logo-design-branding.jpg", "/brand-identity-stationery.jpg", "/logo-design-collection.jpg"],
  },
  {
    title: "Illustrated Narrative",
    description: "Mythological story book",
    images: [
      "/mythological-illustration-storybook.jpg",
      "/illustrated-mythology.jpg",
      "/storybook-illustration-art.jpg",
    ],
  },
  {
    title: "Visual Stories",
    description: "Magazine covers, ads, brochures, editorial design",
    images: ["/magazine-cover-design-editorial.jpg", "/magazine-cover.png", "/brochure-editorial-design.jpg"],
  },
  {
    title: "Type That Talks",
    description: "Typography",
    images: ["/typography-poster.png", "/creative-typography-design.jpg", "/typographic-art.jpg"],
  },
  {
    title: "Visual Rhythm",
    description: "Stop motion",
    images: ["/stop-motion-animation-frame.jpg", "/stop-motion-art-project.jpg", "/animated-stop-motion-scene.jpg"],
  },
  {
    title: "Miniature Mastery",
    description: "Pencil Carving Art",
    images: ["/stop-motion-animation-frame.jpg", "/stop-motion-art-project.jpg", "/animated-stop-motion-scene.jpg"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Explore my diverse creative work across multiple disciplines
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <PortfolioCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
