"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { motion } from "framer-motion"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/hmif", label: "HMIF" },
  { href: "/akselerasi", label: "Akselerasi" },
  { href: "/berita", label: "Berita & Informasi" },
  { href: "/aspiration", label: "Aspirasi" },
]

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#0B2016] to-[#25714D] backdrop-blur-md">
      {/* Inner container with horizontal padding */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-[72px] items-center justify-between gap-4">
          {/* Logo + Text */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            aria-label="HMIF ITERA Homepage"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#FEFF57]/20">
              <img
                src="/logo.png"
                alt="HMIF ITERA Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide">HMIF ITERA</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/70">
                KABINET AKSELERASI
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <NavigationMenuItem key={link.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? "text-[#FEFF57]"
                            : "text-white/90 hover:text-white"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                        {active && (
                          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FEFF57]" />
                        )}
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Toggle navigation menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="end"
                className="mt-2 w-48 border border-white/10 bg-[#0B2016]/95 p-2 backdrop-blur-sm"
              >
                <nav className="flex flex-col gap-1">
                  {navigationLinks.map((link) => {
                    const active = isActive(link.href)
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`relative block rounded-sm px-3 py-2 text-sm transition-colors ${
                          active
                            ? "text-[#FEFF57] before:absolute before:-left-3 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-[#FEFF57]"
                            : "text-white/90 hover:bg-white/5 hover:text-white"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div> {/* End container */}
    </header>
  )
}