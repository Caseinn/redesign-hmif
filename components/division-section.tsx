"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { ArrowRight, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"

type Division = {
  id: number
  name: string
  type: string
  tagline: string
  description: string
  image: string
  logoText: string
  accentColor: string
  programsPreview: string[]
  moreCount: number
}

// placeholder image (nanti ganti foto asli)
const placeholder = (id: number) =>
  `https://picsum.photos/seed/hmif-div-${id}/900/600`

const divisions: Division[] = [
  {
    id: 1,
    name: "Senator",
    type: "Yudikatif",
    tagline: `"Developing People, Shaping Future"`,
    description:
      "Divisi yang bertanggung jawab atas pengembangan sumber daya manusia anggota HMIF.",
    image: placeholder(1),
    logoText: "HMIF",
    accentColor: "bg-emerald-700",
    programsPreview: [
      "Latihan Keterampilan Manajemen Mahasiswa Pra-Dasar (LKMM-PD)",
      "Informatics Gathering (I-GATE)",
    ],
    moreCount: 2,
  },
  {
    id: 2,
    name: "Litbang",
    type: "Eksekutif",
    tagline: `"Investigate, Innovate, Implement"`,
    description:
      "Divisi yang bertanggung jawab atas penelitian, pengembangan, dan inovasi di lingkungan HMIF.",
    image: placeholder(2),
    logoText: "HMIF",
    accentColor: "bg-emerald-600",
    programsPreview: ["Editorial Meeting (EM)", "Evaluasi kegiatan dan program"],
    moreCount: 5,
  },
  {
    id: 3,
    name: "Sosial",
    type: "Legislatif",
    tagline: `"Tech for Social Impact"`,
    description:
      "Divisi yang bertanggung jawab atas kegiatan sosial dan pengabdian masyarakat HMIF.",
    image: placeholder(3),
    logoText: "HMIF",
    accentColor: "bg-emerald-800",
    programsPreview: [
      "Informatics for the Orphanage (INFO)",
      "Informatics Care (ICARE)",
    ],
    moreCount: 4,
  },
]

export function DivisionSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-emerald-100 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading mirip BlogSection */}
        <div className="space-y-4 text-center">
          <Badge className="inline-flex items-center gap-2 rounded-full border-white/30 bg-emerald-900 px-3 py-1 text-xs font-medium text-emerald-50 sm:px-4 sm:py-1.5 sm:text-sm md:text-base">
            Kolaborasi &amp; Sinergi
          </Badge>

          <h2 className="text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl md:text-4xl">
            Divisi <span className="text-emerald-700">HMIF</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-emerald-900/80 sm:text-base">
            Menjadi bagian dari divisi adalah langkah awal untuk mengembangkan
            potensi dan berkarya dalam tim yang solid di lingkungan HMIF.
          </p>
        </div>

        {/* Cards – style ngikut BlogSection */}
        <div className="mt-8 grid gap-4 sm:gap-5 md:mt-10 md:grid-cols-3">
          {divisions.map((division) => (
            <Card
              key={division.id}
              className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border-emerald-100 bg-white/95 p-0 shadow-md"
            >
              {/* TOP: image full-cover, clip by radius */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={division.image}
                  alt={division.name}
                  className="h-full w-full object-cover"
                />

                {/* Gradient overlay bawah biar text kebaca */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

                {/* Top labels */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/75 px-3 py-1 text-xs font-medium text-white">
                    {division.type}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white shadow-md",
                      division.accentColor
                    )}
                  >
                    {division.logoText}
                  </span>
                </div>

                {/* Bottom text on image */}
                <div className="absolute inset-x-4 bottom-4 space-y-1">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {division.name}
                  </p>
                  <p className="text-xs italic text-emerald-100 sm:text-[13px]">
                    {division.tagline}
                  </p>
                </div>
              </div>

              {/* CONTENT – mirip card blog kecil */}
              <CardContent className="flex flex-1 flex-col p-4 sm:p-5">
                {/* Bagian teks + program kita jadikan flex-1,
                    supaya tombol selalu terdorong ke bawah */}
                <div className="flex-1">
                  <CardDescription className="text-sm text-emerald-900/90">
                    {division.description}
                  </CardDescription>

                  {/* Program kerja */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                      <ClipboardList className="h-4 w-4 text-emerald-600" />
                      <span>Program Kerja:</span>
                    </div>

                    <ul className="mt-1 space-y-1 text-sm text-emerald-900/90">
                      {division.programsPreview.map((prog) => (
                        <li key={prog} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                          <span>{prog}</span>
                        </li>
                      ))}

                      {division.moreCount > 0 && (
                        <li className="pl-4 text-sm font-medium text-emerald-700">
                          +{division.moreCount} program lainnya
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Detail button – selalu di bawah kiri */}
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center gap-2 rounded-lg border-emerald-200 bg-emerald-50 text-xs font-medium text-emerald-800 hover:bg-emerald-100"
                  >
                    Detail lengkap
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA – style sama view-all blog */}
        <div className="mt-8 flex justify-center">
          <Button className="inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-6 text-sm font-medium text-emerald-50 hover:bg-emerald-900">
            Detail Lengkap Divisi
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
