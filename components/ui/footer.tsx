"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white px-4 pt-12 pb-8 sm:px-6 lg:px-8">

      {/* ===================== NEWSLETTER ===================== */}
      <section className="mx-auto mb-12 max-w-4xl">
        <Card className="relative overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.07)] border-none">

          {/* Blobs */}
          <div
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle at center, #CCFF00, #138808)",
            }}
          />

          <div
            className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-xl"
            style={{
              background: "radial-gradient(circle at center, #CCFF00, #138808)",
            }}
          />

          <div className="relative z-10 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
              Stay Updated with HMIF
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Subscribe to our newsletter for the latest updates, events, and opportunities.
            </p>

            <div className="mx-auto max-w-md flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-11 rounded-md border border-green-300 bg-white text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <Button className="h-11 rounded-md bg-green-700 px-5 text-sm font-semibold text-white shadow-sm hover:bg-green-800">
                Subscribe
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* ===================== MAIN FOOTER ===================== */}
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Brand + Description */}
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="HMIF ITERA Logo"
                width={52}
                height={52}
                className="rounded-xl border border-green-500 bg-white p-1 shadow-sm"
              />
              <div>
                <h3 className="text-green-700 font-bold text-base">HMIF ITERA</h3>
                <p className="text-xs uppercase text-gray-500 tracking-wide">Kabinet Akselerasi</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              HMIF ITERA (Himpunan Mahasiswa Informatika Institut Teknologi Sumatera)
              merupakan organisasi mahasiswa yang beranggotakan mahasiswa informatika
              dan bergerak berdasarkan tridharma pendidikan.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Alamat", value: "Jalan Terusan Ryacudu 35365 Jati Agung\nLampung" },
                { icon: Mail, label: "Email", value: "hmifitera1@gmail.com" },
                { icon: Phone, label: "Telepon", value: "+62 812-3456-7890" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 mt-0.5">
                    <Icon className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">{label}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side (Menu + Informasi + Socials) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Menu Card */}
            <Card className="rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-none h-fit">
              <h4 className="text-sm font-semibold text-green-700 mb-3">Menu</h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Profile",
                  "Proker",
                  "Academic",
                  "Aspiration",
                ].map((item) => (
                  <li key={item}>
                    <a className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Informasi + Socials */}
            <div className="flex flex-col gap-6">

              <Card className="rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-none min-h-[182px]">
                <h4 className="text-sm font-semibold text-green-700 mb-3">Informasi</h4>
                <ul className="space-y-2">
                  {["Testimonials", "FAQ"].map((item) => (
                    <li key={item}>
                      <a className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Github, label: "Github" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-gray-600 shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:bg-green-50 transition"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Divider & Footer credit */}
        <Separator className="my-10 bg-gray-200" />
        <div className="text-center text-xs text-gray-500">
          Made with <span className="text-green-500">💚</span> by Kabinet Akselerasi · Developed by Caseinn · Designed by GRCA
        </div>
      </section>
    </footer>
  );
}
