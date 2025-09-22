"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logos/ag-logo-rounded-transparent.svg"
              alt="Abogado Gentile Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-serif text-2xl font-semibold text-foreground">Abogado Gentile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-light">
              <Link href="#contact">Schedule Consultation</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="#services"
                className="block px-3 py-2 text-sm font-light text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-sm font-light text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-sm font-light text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-light">
                  <Link href="#contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
