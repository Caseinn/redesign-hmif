"use client"

import { InstagramEmbed } from "react-social-media-embed"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Instagram } from "lucide-react"

export function InstagramSection() {
  return (
    <>
      {/* Instagram Section */}
      <section className="bg-gradient-to-b from-[#37C632] to-[#1B6018] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 rounded-3xl border border-white/15 bg-black/10 p-5 shadow-lg backdrop-blur-sm sm:p-6 lg:flex-row lg:p-10">
            {/* LEFT: Text + CTA */}
            <div className="flex w-full flex-col justify-center space-y-6 lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <Badge className="inline-flex items-center gap-2 rounded-full border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-1.5 sm:text-sm md:text-base">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  @hmif.itera
                </Badge>
              </div>

              <div className="space-y-3 text-center lg:text-left">
                <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                  Yuk follow Instagram kami biar nggak ketinggalan info dan keseruan!
                </h1>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-[#1B6018] hover:bg-white/90 sm:w-auto"
                >
                  <a
                    href="https://www.instagram.com/hmif.itera"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Follow Us
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT: Instagram Embed - improved wrapper */}
            <div className="flex w-full items-center justify-center lg:w-1/2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Phone-like frame */}
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-black/40 p-3 shadow-xl">
                  <div className="mb-3 flex items-center justify-between px-1 text-xs text-white/60">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-300" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </span>
                  </div>

                  {/* Embed area */}
                  <div className="max-h-[500px] overflow-hidden rounded-2xl bg-black/60">
                    <InstagramEmbed
                      url="https://www.instagram.com/hmif.itera"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full bg-[#1B6018]">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="h-12 w-full sm:h-16 md:h-20"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 59L50 55C100 51 200 44 300 30C400 15 500 -6 600 1C700 8 800 44 900 59C1000 73 1100 66 1150 62L1200 59V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0V59Z" />
        </svg>
      </div>
    </>
  )
}
