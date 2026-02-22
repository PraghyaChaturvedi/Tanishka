"use client"

import { useState, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface PortfolioCategoryProps {
  category: {
    title: string
    description: string
    images: string[]
    singleColumn?: boolean
    typographyLayout?: boolean
    pixelsLayout?: boolean // ← new flag for "Pixels and Imaginations"
  }
}

const isVideo = (src: string) => !!src && src.toLowerCase().endsWith(".mp4")

function MediaItem({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        controls
        playsInline
        preload="metadata"
      />
    )
  }
  return <img src={src || "/placeholder.svg"} alt={alt} className={className} />
}

export function PortfolioCategory({ category }: PortfolioCategoryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const coverImage = category.images[0]
  const restImages = category.images.slice(1)

  const openImage = (index: number) => {
    setIsOpen(false)
    setTimeout(() => setActiveIndex(index), 100)
  }

  const closeImage = () => setActiveIndex(null)

  const goNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % category.images.length)
  }

  const goPrev = () => {
    if (activeIndex === null) return
    setActiveIndex(
      (activeIndex - 1 + category.images.length) % category.images.length
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext()
    if (e.key === "ArrowLeft") goPrev()
    if (e.key === "Escape") closeImage()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  // Typography groups
  const groupA = category.images.slice(1, 5)
  const groupB = category.images.slice(5, 13)
  const groupC = category.images.slice(13)

  // Pixels layout groups
  const pixelsCover   = category.images[0]  // rain dance.jpg
  const pixelsDoodle1 = category.images[1]  // doodle 1_page-0001.jpg
  const pixelsDoodle  = category.images[2]  // doodle.jpg
  const pixelsAnimal  = category.images[3]  // animal.jpg
  const pixelsProcess = category.images[4]  // process.jpg

  return (
    <>
      {/* ================= CARD ================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 w-full text-left flex flex-col h-[420px] break-inside-avoid"
      >
        <div className="flex-1 bg-muted flex items-center justify-center overflow-hidden">
          {isVideo(coverImage) ? (
            <video
              src={coverImage}
              className="max-w-full max-h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={coverImage || "/placeholder.svg"}
              alt={category.title}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
        <div className="h-[120px] p-5 flex flex-col justify-center border-t border-border">
          <h3 className="text-lg font-serif font-semibold leading-tight mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {category.description}
          </p>
        </div>
      </button>

      {/* ================= CATEGORY GRID DIALOG ================= */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif">
              {category.title}
            </DialogTitle>
            <p className="text-muted-foreground">{category.description}</p>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            {category.pixelsLayout ? (
              // ══════════════════════════════════════════════════════════
              //  PIXELS LAYOUT — "Pixels and Imaginations"
              // ══════════════════════════════════════════════════════════
              <div className="flex flex-col gap-6">

                {/* COVER — rain dance.jpg */}
                <button
                  onClick={() => openImage(0)}
                  className="bg-muted rounded-lg overflow-hidden focus:outline-none w-full"
                >
                  <MediaItem
                    src={pixelsCover}
                    alt={`${category.title} cover`}
                    className="w-full h-auto object-contain"
                  />
                </button>

                {/* ── TEXT BLOCK 1 — after cover ── */}
                <div className="px-2 py-4 border-l-4 border-border space-y-1">
                  <h4 className="text-xl font-serif font-semibold">
                    Playful Branding: A Doodle Advertisement
                  </h4>
                </div>

                {/* doodle 1 + doodle.jpg — 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => openImage(1)}
                    className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                  >
                    <MediaItem
                      src={pixelsDoodle1}
                      alt="Doodle advertisement 1"
                      className="w-full h-auto object-contain"
                    />
                  </button>
                  <button
                    onClick={() => openImage(2)}
                    className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                  >
                    <MediaItem
                      src={pixelsDoodle}
                      alt="Doodle advertisement 2"
                      className="w-full h-auto object-contain"
                    />
                  </button>
                </div>

                {/* ── TEXT BLOCK 2 — before animal.jpg ── */}
                <div className="px-2 py-4 border-l-4 border-border space-y-1">
                  <h4 className="text-xl font-serif font-semibold">
                    Character Merge: Human Meets Animal
                  </h4>
                </div>

                {/* animal.jpg + process.jpg — 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => openImage(3)}
                    className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                  >
                    <MediaItem
                      src={pixelsAnimal}
                      alt="Character merge human meets animal"
                      className="w-full h-auto object-contain"
                    />
                  </button>
                  {pixelsProcess && (
                    <button
                      onClick={() => openImage(4)}
                      className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                    >
                      <MediaItem
                        src={pixelsProcess}
                        alt="Process illustration"
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  )}
                </div>

              </div>
              // ══════════════════════════════════════════════════════════

            ) : category.typographyLayout ? (
              // ══════════════════════════════════════════════════════════
              //  TYPOGRAPHY LAYOUT
              // ══════════════════════════════════════════════════════════
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => openImage(0)}
                  className="bg-muted rounded-lg overflow-hidden focus:outline-none w-full"
                >
                  <MediaItem
                    src={coverImage}
                    alt={`${category.title} cover`}
                    className="w-full h-auto object-contain"
                  />
                </button>

                <div className="px-2 py-4 border-l-4 border-border space-y-2">
                  <h4 className="text-xl font-serif font-semibold">OBJECT IN TYPE</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The work below explores typography as form rather than text. The object and the word merge into a single visual idea, where meaning is communicated through structure and shape. The focus is on concept, perception, and visual logic.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {groupA.map((image, index) => (
                    <button key={index} onClick={() => openImage(index + 1)} className="bg-muted rounded-lg overflow-hidden focus:outline-none">
                      <MediaItem src={image} alt={`${category.title} ${index + 2}`} className="w-full h-auto object-contain" />
                    </button>
                  ))}
                </div>

                <div className="px-2 py-4 border-l-4 border-border space-y-2">
                  <h4 className="text-xl font-serif font-semibold">ONE LETTER, ONE THOUGHT</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This exercise explores how a single letter can embody the meaning of a word that begins with it. The letterform becomes a visual metaphor, expressing the concept through form and structure.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {groupB.map((image, index) => (
                    <button key={index} onClick={() => openImage(index + 5)} className="bg-muted rounded-lg overflow-hidden focus:outline-none">
                      <MediaItem src={image} alt={`Typography letter ${index + 1}`} className="w-full h-auto object-contain" />
                    </button>
                  ))}
                </div>

                <div className="px-2 py-4 border-l-4 border-border space-y-2">
                  <h4 className="text-lg font-serif font-semibold">LETTERS THAT REVEALS</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This exercise investigates how meaning can emerge from within a word itself. Selected letters are transformed into visual cues that represent the word's concept.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {groupC.map((image, index) => (
                    <button key={index} onClick={() => openImage(index + 13)} className="bg-muted rounded-lg overflow-hidden focus:outline-none">
                      <MediaItem src={image} alt={`Typography word ${index + 1}`} className="w-full h-auto object-contain" />
                    </button>
                  ))}
                </div>
              </div>

            ) : category.singleColumn ? (
              // ── SINGLE COLUMN LAYOUT ──
              <div className="flex flex-col items-center gap-4">
                {category.images.map((image, index) => (
                  <button key={index} onClick={() => openImage(index)} className="bg-muted rounded-lg overflow-hidden focus:outline-none w-full max-w-2xl">
                    <MediaItem src={image} alt={`${category.title} ${index + 1}`} className="w-full h-auto object-contain" />
                  </button>
                ))}
              </div>

            ) : (
              // ── DEFAULT 2-COLUMN LAYOUT ──
              <>
                <div className="flex justify-center">
                  <button onClick={() => openImage(0)} className="bg-muted rounded-lg overflow-hidden focus:outline-none max-w-md w-full">
                    <MediaItem src={coverImage} alt={`${category.title} cover`} className="w-full h-auto object-contain" />
                  </button>
                </div>
                {restImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {restImages.map((image, index) => (
                      <button key={index} onClick={() => openImage(index + 1)} className="bg-muted rounded-lg overflow-hidden focus:outline-none">
                        <MediaItem src={image} alt={`${category.title} ${index + 2}`} className="w-full h-auto object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= FULLSCREEN OVERLAY ================= */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
        >
          <button onClick={closeImage} className="absolute top-4 right-4 z-10 p-2 text-white focus:outline-none" aria-label="Close">
            <X size={32} />
          </button>

          <button onClick={goPrev} className="absolute left-4 z-10 p-2 text-white focus:outline-none" aria-label="Previous">
            <ChevronLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>

          {isVideo(category.images[activeIndex]) ? (
            <video
              key={category.images[activeIndex]}
              src={category.images[activeIndex]}
              className="w-[90vw] h-[90vh] object-contain"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={category.images[activeIndex]}
              alt={`Artwork ${activeIndex + 1}`}
              className="w-[90vw] h-[90vh] object-contain"
            />
          )}

          <button onClick={goNext} className="absolute right-4 z-10 p-2 text-white focus:outline-none" aria-label="Next">
            <ChevronRight className="w-7 h-7 md:w-12 md:h-12" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
            {activeIndex + 1} / {category.images.length}
          </div>
        </div>
      )}
    </>
  )
}