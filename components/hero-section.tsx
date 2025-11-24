"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, CalendarRange, Flag } from "lucide-react"

const placeholder = (id: number) =>
  `https://picsum.photos/seed/hmif-hero-${id}/600/400`

const HERO_IMAGES = [placeholder(1), placeholder(2), placeholder(3)]

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#1E4326] via-[#3A6B3B] via-66% to-[#D9F96F] text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:gap-10 lg:px-8 xl:py-16">
        {/* LEFT: Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <Badge className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#37C632] px-3 py-1 text-xs font-medium text-white shadow-md sm:px-4 sm:py-1.5 sm:text-sm md:text-base lg:mx-0">
            Welcome to HMIF ITERA
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Badge>

          {/* Headings */}
          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Empowering{" "}
              <span className="bg-[#FEFF00] bg-clip-text text-transparent">
                Future
              </span>
              <br />
              Tech Leaders
            </h1>
            <p className="text-sm text-lime-100/90 sm:text-base">
              HMIF itu buat kamu yang lagi nyari{" "}
              <span className="font-semibold">goals</span> &amp;{" "}
              <span className="font-semibold">space to grow!</span>
            </p>
          </div>

          {/* Motivation Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-3 sm:text-base lg:justify-start">
            <span className="font-semibold text-lime-100">
              Terjebak di zona nyaman?
            </span>
            <span className="inline-flex items-center rounded-md bg-white/20 px-2.5 py-1 text-[10px] font-mono font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs">
              ERROR 404:
              <span className="ml-1 text-yellow-200">motivation_not_found</span>
            </span>
          </div>

          {/* Quote Card */}
          <div className="mx-auto max-w-lg lg:mx-0">
            <div className="relative rounded-3xl bg-[#F5F8FC] px-8 py-6 shadow-lg">
              {/* Left accent bar */}
              <div className="absolute left-0 top-4 bottom-4 w-[8px] rounded-full bg-[#FFD93B]" />

              {/* Quote marks */}
              <div className="absolute -left-4 -top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-orange-400 shadow">
                &quot;
              </div>
              <div className="absolute -right-4 -bottom-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-orange-400 shadow">
                &quot;
              </div>

              {/* Quote content */}
              <div className="pl-6">
                <p className="text-[15px] font-semibold italic text-[#123524] sm:text-base">
                  “Teknik Keras, Informatika Selaras”
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-md bg-[#FFE9A6] px-3 py-1 text-[11px] font-medium text-[#4A3B09]">
                    #JargonHMIF
                  </span>
                  <span className="text-sm font-medium text-[#2E2E2E]">
                    – PH
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button className="w-full rounded-lg bg-[#37C632] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#37C632]/80 sm:w-auto">
              Explore Programs
            </Button>
            <Button className="w-full rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#3E7B27] hover:bg-white/80 sm:w-auto">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-5">
            <StatItem
              icon={<Users className="h-6 w-6" />}
              value="100+"
              label="Active Members"
            />
            <StatItem
              icon={<CalendarRange className="h-6 w-6" />}
              value="20+"
              label="Annual Events"
            />
            <StatItem
              icon={<Flag className="h-6 w-6" />}
              value="2025"
              label="Tahun Kepengurusan"
            />
          </div>
        </div>

        {/* RIGHT: Image Collage */}
        <div className="w-full max-w-lg flex-1 lg:mt-0">
          <div className="flex justify-center">
            <div className="relative">
              {/* glow */}
              <div className="absolute -bottom-3 left-4 right-4 h-3 rounded-full bg-[#E5FF4A]/50 blur-md sm:-bottom-4 sm:left-6 sm:right-6 sm:h-4" />
              <div className="relative rounded-[28px] bg-white/90 p-3 shadow-2xl sm:rounded-[32px] sm:p-4">
                {/* Mobile: single image */}
                <div className="block w-full overflow-hidden rounded-2xl lg:hidden">
                  <img
                    src={HERO_IMAGES[0]}
                    alt="HMIF"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                {/* Desktop: collage */}
                <div className="hidden lg:flex">
                  <div className="grid h-[420px] w-[480px] grid-cols-3 gap-3">
                    <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
                      <img
                        src={HERO_IMAGES[0]}
                        alt="HMIF main"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={HERO_IMAGES[1]}
                        alt="HMIF activity"
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={HERO_IMAGES[2]}
                        alt="HMIF activity"
                        className="aspect-square w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE DIVIDER – masih di dalam section, tanpa bg tambahan */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16 md:h-20"
          fill="#d8f999" // warna section selanjutnya
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 59L50 55C100 51 200 44 300 30C400 15 500 -6 600 1C700 8 800 44 900 59C1000 73 1100 66 1150 62L1200 59V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0V59Z" />
        </svg>
      </div>
    </section>
  )
}

// ── Reusable Stat Item ───────────────────────────────────────
function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 bg-white px-2 text-[#3E7B27]">
          {icon}
        </span>
        <span className="text-xl font-bold text-black sm:text-2xl">
          {value}
        </span>
      </div>
      <p className="mt-1 text-xs text-black sm:text-sm">{label}</p>
    </div>
  )
}
