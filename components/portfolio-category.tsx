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
    typographyLayout?: boolean // ← new flag for "Type That Talks"
  }
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

  // ── Typography image groups ─────────────────────────────────────────────
  // images[0]   → cover
  // images[1-4] → 2.jpg, 1.jpg, tannu typooo final-02, -03
  // images[5-12]→ typography letters-01 to -08
  // images[13+] → typography word (2)-01 to -03
  const groupA = category.images.slice(1, 5)
  const groupB = category.images.slice(5, 13)
  const groupC = category.images.slice(13)

  return (
    <>
      {/* ================= CARD ================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 w-full text-left flex flex-col h-[420px] break-inside-avoid"
      >
        <div className="flex-1 bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={coverImage || "/placeholder.svg"}
            alt={category.title}
            className="max-w-full max-h-full object-contain"
          />
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
            {category.typographyLayout ? (
              // ══════════════════════════════════════════════════════════
              //  TYPOGRAPHY LAYOUT — "Type That Talks"
              // ══════════════════════════════════════════════════════════
              <div className="flex flex-col gap-6">

                {/* COVER */}
                <button
                  onClick={() => openImage(0)}
                  className="bg-muted rounded-lg overflow-hidden focus:outline-none w-full"
                >
                  <img
                    src={coverImage || "/placeholder.svg"}
                    alt={`${category.title} cover`}
                    className="w-full h-auto object-contain"
                  />
                </button>

                {/* ── TEXT BLOCK 1 — after cover ── */}
                <div className="px-2 py-4 border-l-4 border-border space-y-2">
                  <h4 className="text-xl font-serif font-semibold">
                    
                    OBJECT IN TYPE
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The work below explores typography as form rather than text. The object and the word merge into a single visual idea, where meaning is communicated through structure and shape. The focus is on concept, perception, and visual logic.
                  </p>
                </div>

                {/* GROUP A — 4 images in 2×2 grid */}
                <div className="grid grid-cols-2 gap-4">
                  {groupA.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openImage(index + 1)}
                      className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${category.title} ${index + 2}`}
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  ))}
                </div>

                {/* ── TEXT BLOCK 2 — section label before letters ── */}
                <div className="px-2 pt-2">
                  <h4 className="text-xl font-serif font-semibold tracking-widest uppercase">
                    {/* ✏️ EDIT SECTION LABEL — you said you'll send this text later */}
                    T · Type
                  </h4>
                </div>

                {/* GROUP B — letters-01 to -08 */}
                <div className="grid grid-cols-2 gap-4">
                  {groupB.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openImage(index + 5)}
                      className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Typography letter ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  ))}
                </div>

                {/* ── TEXT BLOCK 3 — paragraph before word section ── */}
                <div className="px-4 py-5 rounded-lg bg-muted/40 space-y-2">
                  <h4 className="text-lg font-serif font-semibold">
                    {/* ✏️ EDIT WORD SECTION HEADING */}
                    Words as Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {/* ✏️ EDIT WORD SECTION PARAGRAPH */}
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                {/* GROUP C — word (2)-01 to -03 */}
                <div className="grid grid-cols-2 gap-4">
                  {groupC.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => openImage(index + 13)}
                      className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Typography word ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </button>
                  ))}
                </div>

              </div>
              // ══════════════════════════════════════════════════════════

            ) : category.singleColumn ? (
              // ── SINGLE COLUMN LAYOUT ──
              <div className="flex flex-col items-center gap-4">
                {category.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openImage(index)}
                    className="bg-muted rounded-lg overflow-hidden focus:outline-none w-full max-w-2xl"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </button>
                ))}
              </div>

            ) : (
              // ── DEFAULT 2-COLUMN LAYOUT ──
              <>
                <div className="flex justify-center">
                  <button
                    onClick={() => openImage(0)}
                    className="bg-muted rounded-lg overflow-hidden focus:outline-none max-w-md w-full"
                  >
                    <img
                      src={coverImage || "/placeholder.svg"}
                      alt={`${category.title} cover`}
                      className="w-full h-auto object-contain"
                    />
                  </button>
                </div>
                {restImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {restImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => openImage(index + 1)}
                        className="bg-muted rounded-lg overflow-hidden focus:outline-none"
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${category.title} ${index + 2}`}
                          className="w-full h-auto object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= FULLSCREEN IMAGE OVERLAY ================= */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 z-10 p-2 text-white focus:outline-none"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 z-10 p-2 text-white focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7 md:w-12 md:h-12" />
          </button>

          <img
            src={category.images[activeIndex]}
            alt={`Artwork ${activeIndex + 1}`}
            className="w-[90vw] h-[90vh] object-contain"
          />

          <button
            onClick={goNext}
            className="absolute right-4 z-10 p-2 text-white focus:outline-none"
            aria-label="Next image"
          >
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