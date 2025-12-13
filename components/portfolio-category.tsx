"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PortfolioCategoryProps {
  category: {
    title: string
    description: string
    images: string[]
  }
}

export function PortfolioCategory({ category }: PortfolioCategoryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

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
            src={category.images[0] || "/placeholder.svg"}
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
            <p className="text-muted-foreground">
              {category.description}
            </p>
          </DialogHeader>

          {/* IMAGE GRID */}
          <div className="columns-1 sm:columns-2 gap-4 mt-6 space-y-4">
            {category.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className="bg-muted rounded-lg overflow-hidden break-inside-avoid focus:outline-none"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${category.title} ${index + 1}`}
                  className="w-full h-auto object-contain hover:opacity-90 transition"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= LARGE IMAGE DIALOG ================= */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] bg-black/90 border-none p-4 flex items-center justify-center">
          
          {/* Accessibility title (hidden visually) */}
          <DialogTitle className="sr-only">
            Enlarged artwork view
          </DialogTitle>

          {activeImage && (
            <img
              src={activeImage}
              alt="Enlarged artwork"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
