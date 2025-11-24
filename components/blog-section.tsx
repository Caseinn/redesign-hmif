"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

type Category =
  | "Semua"
  | "Teknologi"
  | "Akademik"
  | "Kegiatan"
  | "Informasi"
  | "Tutorial"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  category: Category
  image: string
  tag: string
  featured?: boolean
}

const placeholder = (id: number) =>
  `https://picsum.photos/seed/hmif-${id}/800/500`

const posts: BlogPost[] = [
  {
    id: 1,
    featured: true,
    category: "Tutorial",
    tag: "Tutorial",
    title: "Tutorial Lengkap: Membuat Game 2D dengan Unity untuk Pemula",
    excerpt:
      "Panduan komprehensif untuk kamu yang ingin mulai belajar membuat game 2D dengan Unity, mulai dari pengenalan interface hingga konsep dasar gameplay.",
    image: placeholder(1),
  },
  {
    id: 2,
    category: "Kegiatan",
    tag: "Workshop",
    title: "Workshop UI/UX Design: Merancang Antarmuka Berpusat pada Pengguna",
    excerpt:
      "Workshop HMIF yang membahas prinsip dasar desain antarmuka, riset pengguna, dan praktik langsung membuat prototipe interaktif.",
    image: placeholder(2),
  },
  {
    id: 3,
    category: "Informasi",
    tag: "Webinar",
    title: "Webinar Cybersecurity: Melindungi Data di Era Digital",
    excerpt:
      "Bahas tuntas ancaman keamanan siber terkini dan cara melindungi data pribadi maupun sistem aplikasi dari serangan.",
    image: placeholder(3),
  },
  {
    id: 4,
    category: "Akademik",
    tag: "Kompetisi",
    title: "Tips Menghadapi Competitive Programming dari Para Juara",
    excerpt:
      "Kumpulan strategi, pola latihan, dan mindset yang digunakan para juara kompetisi programming untuk konsisten berprestasi.",
    image: placeholder(4),
  },
]

export function BlogSection() {
  const [activeCategory] = useState<Category>("Semua")

  const filtered = posts.filter((post) =>
    activeCategory === "Semua" ? true : post.category === activeCategory
  )

  const featured = filtered.find((p) => p.featured) ?? filtered[0]
  const others = filtered.filter((p) => p.id !== featured?.id)

  return (
    <section className="bg-gradient-to-b from-lime-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <div className="space-y-4 text-center">
          <Badge className="inline-flex items-center gap-2 rounded-full border-white/30 bg-linear-to-r from-[#123524] to-[#4CAF50] px-3 py-1 text-xs font-medium text-emerald-50 sm:px-4 sm:py-1.5 sm:text-sm md:text-base">
            IOS · Informatics Ongoing Story
          </Badge>

          <h2 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl md:text-4xl">
            Cerita Terbaru dari{" "}
            <span className="text-emerald-700 underline decoration-emerald-400">
              Informatika ITERA
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-emerald-900/80 sm:text-base">
            Berita, tutorial, dan informasi seputar kegiatan dan perkembangan di
            dunia informatika serta Himpunan Mahasiswa Informatika.
          </p>
        </div>

        {/* Featured card */}
        {featured && (
          <Card className="mt-8 overflow-hidden rounded-3xl border-emerald-100 bg-white/95 p-0 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* IMAGE SIDE */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />

                {/* GRADIENT SHADOW - PURE TAILWIND */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                <div className="absolute left-4 top-4 z-10">
                  <Badge className="rounded-full bg-white text-xs text-black">
                    {featured.tag}
                  </Badge>
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className="flex flex-col justify-between p-5 sm:p-7 md:p-8">
                <div className="space-y-3">
                  <CardTitle className="text-lg font-semibold text-emerald-950 sm:text-xl md:text-2xl">
                    {featured.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-emerald-900/80 sm:text-base">
                    {featured.excerpt}
                  </CardDescription>
                </div>

                <div className="mt-5">
                  <Button
                    asChild
                    className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#123524] to-[#4CAF50] px-5 text-sm font-medium text-emerald-50 hover:bg-emerald-800"
                  >
                    <a href="/blog">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Other posts */}
        {others.length > 0 && (
          <div className="mt-6 grid gap-4 sm:gap-5 md:mt-8 md:grid-cols-3">
            {others.map((post) => (
              <Card
                key={post.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border-emerald-100 bg-white/95 p-0 shadow-md gap-0"
              >
                {/* IMAGE */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />

                  {/* GRADIENT SHADOW */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

                  <div className="absolute left-3 top-3 z-10">
                    <Badge className="rounded-full bg-white text-[11px] text-black px-2">
                      {post.tag}
                    </Badge>
                  </div>
                </div>

                <CardContent className="flex flex-1 flex-col p-4 sm:p-5">
                  <CardTitle className="line-clamp-2 text-sm font-semibold text-emerald-950 sm:text-base">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-4 text-xs text-emerald-900/80 sm:text-sm">
                    {post.excerpt}
                  </CardDescription>

                  <div className="mt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center gap-2 rounded-lg border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-800 hover:bg-emerald-100"
                    >
                      <a href="/blog">
                        Baca Selengkapnya
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View all button */}
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-lg bg-linear-to-r from-[#123524] to-[#4CAF50] px-6 text-sm font-medium text-emerald-50 hover:bg-emerald-900">
            <a href="/blog">Lihat Semua Artikel</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
