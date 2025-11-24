"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400)
    }

    // Trigger on mount (in case page is already scrolled)
    toggleVisibility()

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 ease-in-out md:bottom-8 md:right-8 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Kembali ke atas"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  )
}