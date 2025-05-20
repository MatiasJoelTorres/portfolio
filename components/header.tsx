"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Mi Portfolio
          </Link>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b z-50">
                <nav className="container py-4">
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <ModeToggle />
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
