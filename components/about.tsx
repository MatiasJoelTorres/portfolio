"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-primary">
              <Image src="C:\Users\matia\Desktop\portfolio\public\Imagen de WhatsApp 2025-05-12 a las 16.17.32_a2ae2543.jpg" alt="Tu foto" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Sobre Mí</h2>
            <p className="text-muted-foreground">
              Soy un desarrollador apasionado con experiencia en la creación de aplicaciones web modernas y atractivas.
              Me especializo en tecnologías frontend como React, Next.js y Tailwind CSS, pero también tengo experiencia
              en desarrollo backend con Node.js.
            </p>
            <p className="text-muted-foreground">
              Mi objetivo es crear soluciones digitales que no solo se vean bien, sino que también proporcionen una
              excelente experiencia de usuario y resuelvan problemas reales.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">3+</h3>
                  <p className="text-sm text-muted-foreground">Años de experiencia</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">15+</h3>
                  <p className="text-sm text-muted-foreground">Proyectos completados</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
