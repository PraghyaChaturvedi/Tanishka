"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PortfolioCategoryProps {
  category: {
    title: string
    description: string
    images: string[]
  }
}

export function PortfolioCategory({ category }: PortfolioCategoryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const coverImage = category.images[0]
  const restImages = category.images.slice(1)

  const openImage = (index: number) => setActiveIndex(index)
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

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activeIndex === null) return
    if (e.key === "ArrowRight") goNext()
    if (e.key === "ArrowLeft") goPrev()
  }

  return (
    <>
      {/* ================= CARD ================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 w-full text-left flex flex-col h-[420px] break-inside-avoid"
      >
        {/* IMAGE AREA */}
        <div className="flex-1 bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={coverImage || "/placeholder.svg"}
            alt={category.title}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* TEXT AREA (FIXED HEIGHT) */}
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
            {/* COVER IMAGE — centered, single row */}
            <div className="flex justify-center">
              <button
                onClick={() => openImage(0)}
                className="bg-muted rounded-lg overflow-hidden focus:outline-none max-w-md w-full"
              >
                <img
                  src={coverImage || "/placeholder.svg"}
                  alt={`${category.title} cover`}
                  className="w-full h-auto object-contain hover:opacity-90 transition"
                />
              </button>
            </div>

            {/* REMAINING IMAGES — 2-column grid */}
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
                      className="w-full h-auto object-contain hover:opacity-90 transition"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= LARGE IMAGE DIALOG WITH PREV/NEXT ================= */}
      <Dialog open={activeIndex !== null} onOpenChange={closeImage}>
        <DialogContent
          className="max-w-[90vw] max-h-[90vh] bg-black/90 border-none p-4 flex items-center justify-center"
          onKeyDown={handleKeyDown}
        >
          {/* Accessibility title (hidden visually) */}
          <DialogTitle className="sr-only">Enlarged artwork view</DialogTitle>

          {activeIndex !== null && (
            <div className="relative flex items-center justify-center w-full h-full">
              {/* PREV BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="absolute left-0 z-10 p-2 rounded-full bg-gray-500 hover:bg-gray-700 text-white ring-2 ring-white/40 shadow-lg transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              {/* IMAGE */}
              <img
                src={category.images[activeIndex]}
                alt={`Artwork ${activeIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mx-14"
              />

              {/* NEXT BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="absolute right-0 z-10 p-2 rounded-full bg-gray-500 hover:bg-gray-700 text-white ring-2 ring-white/40 shadow-lg transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              {/* IMAGE COUNTER */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white text-sm px-3 py-1 rounded-full ring-1 ring-white/20">
                {activeIndex + 1} / {category.images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}