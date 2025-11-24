"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Clapperboard } from "lucide-react"

export function ProfileSection() {
  return (
    <section className="relative bg-gradient-to-b from-lime-200 via-lime-100 to-white py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ==== Top Heading ==== */}
        <div className="space-y-4 text-center mb-10">
          <Badge className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#123524] to-[#4CAF50] text-white shadow px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm md:text-base">
            Video Profile
          </Badge>

          <h2 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
            Mengenal <span className="text-emerald-700">HMIF</span> Lebih Dekat
          </h2>

          <p className="mx-auto max-w-2xl text-emerald-900/80 text-sm sm:text-base">
            Simak video profil kami untuk mendapatkan gambaran tentang kegiatan 
            Himpunan Mahasiswa Informatika ITERA.
          </p>
        </div>

        {/* ==== White Video Box Placeholder ==== */}
        <div className="relative mx-auto w-full max-w-5xl">
          <Card className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-200/40">
            
            {/* Placeholder YouTube embed (empty box) */}
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <iframe
                src="https://www.youtube.com/embed/fQfKcgKVaN0?si=yqRMMbue7bi04b4s"
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Decoration dot top-left */}
            <div className="absolute top-4 left-4 h-3 w-3 rounded-full bg-emerald-300" />
            {/* Decoration dot bottom-left */}
            <div className="absolute bottom-4 left-4 h-3 w-3 rounded-full bg-purple-400" />
            {/* Decoration dot top-right */}
            <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-purple-500" />
            <div className="absolute bottom-4 right-4 h-3 w-3 rounded-full bg-emerald-300" />
          </Card>
        </div>

        {/* ==== Quote Box ==== */}
        <div className="mx-auto mt-12 flex justify-center">
          <div className="max-w-3xl rounded-xl bg-gradient-to-r from-emerald-900/90 to-emerald-600 p-6 text-center text-white shadow-lg">
            <p className="text-sm sm:text-base leading-relaxed">
              “Video ini menampilkan semangat dan kreativitas komunitas HMIF dalam belajar 
              dan berkembang bersama. Karena di HMIF, kita tidak hanya belajar tentang teknologi, 
              tapi juga membangun koneksi dan persahabatan.”
            </p>

            <p className="mt-3 font-semibold text-emerald-200">– Kominfo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
