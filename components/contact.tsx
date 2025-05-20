"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé lo antes posible.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Información de contacto</h3>
              <p className="text-muted-foreground">
                Estoy disponible para proyectos freelance, oportunidades de trabajo a tiempo completo o simplemente para
                charlar sobre tecnología.
              </p>

              <div className="space-y-4 mt-8">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">matias.jtor@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium">+54 9 11 2473 8753</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium">San Rafael, Mendoza - Argentina</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" required placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" name="subject" required placeholder="Asunto del mensaje" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
