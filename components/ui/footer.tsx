"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl pt-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Brand + Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-13 w-13 overflow-hidden rounded-xl border-2 border-green-600 bg-white p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="HMIF ITERA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-green-800 font-bold text-lg">HMIF ITERA</h3>
                <p className="text-xs uppercase text-green-600 tracking-wide font-medium">Kabinet Akselerasi</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              HMIF ITERA (Himpunan Mahasiswa Informatika Institut Teknologi Sumatera) merupakan organisasi mahasiswa yang beranggotakan mahasiswa informatika dan bergerak berdasarkan tridharma pendidikan.
            </p>

            <div className="space-y-3.5">
              {[
                { icon: MapPin, label: "Alamat", value: "Jalan Terusan Ryacudu,\nJati Agung, Lampung 35365" },
                { icon: Mail, label: "Email", value: "hmifitera1@gmail.com" },
                { icon: Phone, label: "Telepon", value: "+62 812-3456-7890" },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-green-800">{label}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Menu */}
            <Card className="rounded-2xl bg-green-50/40 px-5 py-4 border border-green-100 h-fit">
              <h4 className="text-sm font-bold text-green-800 mb-3">Navigasi</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Tentang HMIF", href: "/hmif" },
                  { label: "Profil", href: "#" },
                  { label: "Program Kerja", href: "/proker" },
                  { label: "Akademik", href: "#" },
                  { label: "Aspirasi", href: "/aspiration" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-800 transition-colors"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-0.5" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Info + Socials */}
            <div className="flex flex-col gap-6">
              <Card className="rounded-2xl bg-green-50/40 px-5 py-4 border border-green-100">
                <h4 className="text-sm font-bold text-green-800 mb-3">Informasi</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Testimoni", href: "#" },
                    { label: "FAQ", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-800 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-0.5" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="flex justify-center gap-3">
                {[
                  { Icon: Instagram, label: "Instagram", href: "#" },
                  { Icon: Github, label: "GitHub", href: "#" },
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm border border-green-100 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-green-200" />
        <div className="text-center text-xs text-gray-600">
          Dibuat dengan <span className="text-green-600">💚</span> oleh Kabinet Akselerasi · 
          Dikembangkan oleh <span className="font-medium text-green-700">Caseinn & Aziz097</span> · 
          Dirancang oleh <span className="font-medium text-green-700">GRCA</span>
        </div>
      </div>
    </footer>
  );
}