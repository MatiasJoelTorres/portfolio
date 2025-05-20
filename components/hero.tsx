"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hola, soy <span className="text-primary">Matias Torres</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Desarrollador web especializado en crear experiencias digitales atractivas y funcionales
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="#projects">Ver Proyectos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Desplazarse hacia abajo">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}
