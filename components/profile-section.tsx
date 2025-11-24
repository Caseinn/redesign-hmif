"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Quote, PlayCircle } from "lucide-react"

export function ProfileSection() {
  return (
    <section className="relative bg-gradient-to-b from-lime-200 to-lime-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="space-y-3 text-center mb-10 px-2 sm:px-0">
          <Badge className="inline-flex items-center gap-2 rounded-full border-white/30 bg-linear-to-r from-[#123524] to-[#4CAF50] px-3 py-1 text-xs font-medium text-emerald-50 sm:px-4 sm:py-1.5 sm:text-sm md:text-base">
          <PlayCircle/>
            Video Profile
          </Badge>
          <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">
            Mengenal <span className="text-emerald-700">HMIF</span> Lebih Dekat
          </h2>
          <p className="text-sm text-emerald-900/80 sm:text-base">
            Simak video profil kami untuk mendapatkan gambaran tentang kegiatan Himpunan Mahasiswa Informatika ITERA.
          </p>
        </div>

        {/* Video */}
          <div className="mx-auto w-full max-w-xl md:max-w-none">
            <div className="group relative rounded-3xl bg-gradient-to-br from-emerald-500/60 via-lime-400/60 to-emerald-200/80 p-[1px] shadow-xl shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/40">
              <Card className="relative h-full w-full overflow-hidden rounded-[22px] border border-emerald-100/70 bg-white/95 backdrop-blur">
                {/* Video */}
                <div className="relative aspect-video min-h-[260px] w-full sm:min-h-[320px]">
                  {/* Hover overlay glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <iframe
                    src="https://www.youtube.com/embed/fQfKcgKVaN0?si=yqRMMbue7bi04b4s"
                    className="h-full w-full"
                    allowFullScreen
                    title="Video Profil HMIF ITERA"
                  />
                </div>
              </Card>
            </div>
          </div>

        {/* Quote */}
        <div className="mx-auto mt-12 max-w-2xl px-2 sm:px-0">
          <div className="rounded-xl bg-gradient-to-r from-[#3E7B27] to-[#37C632] p-5 text-white shadow-lg shadow-emerald-500/30">
            <div className="flex items-start gap-3">
              <Quote className="mt-0.5 h-5 w-5 flex-shrink-0 opacity-80" />
              <div className="min-w-0">
                <p className="text-sm leading-relaxed italic sm:text-base">
                  “Video ini menampilkan semangat dan kreativitas komunitas
                  HMIF dalam belajar dan berkembang bersama. Karena di HMIF,
                  kita tidak hanya belajar tentang teknologi, tapi juga
                  membangun koneksi dan persahabatan.”
                </p>
                <p className="mt-3 text-xs font-medium tracking-wide text-emerald-100 sm:text-sm">
                  – Kominfo HMIF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}