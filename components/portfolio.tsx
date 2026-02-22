"use client"
import { PortfolioCategory } from "./portfolio-category"

const portfolioCategories = [

  {
    title: "Fresh Look, Same Core",
    description: "Re-branding",
    images: ["/reBranding/portfolio work-01.jpg",
"/reBranding/portfolio work-02.jpg",
"/reBranding/portfolio work-03.jpg",
"/reBranding/portfolio work-04.jpg",
"/reBranding/portfolio work-05.jpg",
"/reBranding/portfolio work-06.jpg",
"/reBranding/portfolio work-07.jpg",
"/reBranding/portfolio work-08.jpg",
"/reBranding/portfolio work-09.jpg",
"/reBranding/portfolio work-10.jpg",
"/reBranding/portfolio work-11.jpg",
    ],
  },

  {
    title: "Make Them Look",
    description: "Poster designing",
    images: [
      "/poster/fireless cooking poster design.jpg",
      "/poster/farewell invite 1-Recovered.jpg",
      "/poster/ganesh chaturthi invite.jpg",
      "/poster/movie poster recreate 2.jpg",
      
      "/poster/movie-poster-recreate-1.jpeg",
      "/poster/illustration 1.jpg",
      "/poster/illustration 2.jpg",
      "/poster/poster making.jpg",
      "/poster/sofa add poster.jpg",
      "/poster/education poster.jpg",
      "/poster/buisness poster.jpg",
],
  },

  {
    title: "Visual Stories",
    description: "Editorial design",
    images: ["/poster/cover.jpg",
      "/poster/design 2.jpg", 
      "/poster/design 3.jpg",
"/poster/design 4.jpg",
"/poster/composition 2.jpg",
"/poster/composition 3.jpg",
"/poster/composition 5.jpg",
"/poster/design 5.jpg",
"/poster/design 6.jpg",
"/poster/design.jpg",],
  },

   {
    title: "Designed to Communicate",
    description: "Magzine covers, Ads, Brochure",
    images: [
      "/magzine/zudio ad.jpg",
      "/magzine/carasouel ad.jpg",
      "/magzine/magazine cover.jpg",
      "/magzine/newspaper creative typo.jpg"
      
    ],
  },

  {
    title: "Illustrated Narrative",
    description: "Mythological story book",
    singleColumn: true,
    images: [
      "/mythological-story-book/taniii story book-03-01.jpg",
      "/mythological-story-book/taniii story book-03-02.jpg",
      "/mythological-story-book/taniii story book-03-03.jpg",
      "/mythological-story-book/taniii story book-03-04.jpg",
      "/mythological-story-book/taniii story book-03-05.jpg",
      "/mythological-story-book/taniii story book-03-06.jpg",
      "/mythological-story-book/taniii story book-03-07.jpg",
      "/mythological-story-book/taniii story book-03-08.jpg",
      "/mythological-story-book/taniii story book-03-09.jpg",
      "/mythological-story-book/taniii story book-03-10.jpg",
    ],
  },

  {
    title: "Pixels and Imaginations",
    description: "Digital illustrations",
    images: [
      "illustrations/rain dance.jpg",
      "/mythological-illustration-storybook.jpg",
      "/illustrated-mythology.jpg",
      "/storybook-illustration-art.jpg",
    ],
  },
  
  {
    title: "Brand Marks Study",
    description: "Logo designing and logo book",
    images: ["/logo/Untitled-1-01.jpg", "/logo/Untitled-1-02.jpg", "/logo/Untitled-1-03.jpg"
      , "/logo/Untitled-1-04.jpg", "/logo/Untitled-1-05.jpg", "/logo/Untitled-1-06.jpg",
      "/logo/Untitled-1-07.jpg", "/logo/Untitled-1-08.jpg", "/logo/Untitled-1-09.jpg", "/logo/Untitled-1-10.jpg",
    ],
  },

  {
    title: "Type That Talks",
    description: "Typography",
    typographyLayout: true,
    images: [
      "/typo/typo photo clip mask.jpg",
      "/typo/2.jpg", "/typo/1.jpg",  "/typo/tannu typooo final-02.jpg", "/typo/tannu typooo final-03.jpg",
      
"/typo/typography letters-01.jpg",
"/typo/typography letters-02.jpg",
"/typo/typography letters-03.jpg",
"/typo/typography letters-04.jpg",
"/typo/typography letters-05.jpg",
"/typo/typography letters-06.jpg",
"/typo/typography letters-07.jpg",
"/typo/typography letters-08.jpg",
"/typo/typography word (2)-01.jpg",
"/typo/typography word (2)-02.jpg",
"/typo/typography word (2)-03.jpg"
    ],
  },

  {
    title: "Lines That Speak",
    description: "Sketching, live sketches, still life, perspective, portrait, compositions",
    images: [
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.46 AM (2).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.47 AM (1).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.47 AM (2).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.47 AM.jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.48 AM.jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.49 AM (1).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.49 AM (2).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.49 AM.jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.55 AM (1).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.57 AM (1).jpeg",
      "/Lines That Speak/WhatsApp Image 2025-12-13 at 11.20.57 AM.jpeg",
    ],
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
