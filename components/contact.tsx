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
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CheckCircle } from "lucide-react"
import { Formik, Form, Field } from "formik"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      {/* Alerta centrada en la pantalla */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Alert className=" max-w-md w-full bg-green-50 border-green-200 text-green-800">
            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
            <div>
              <AlertTitle>¡Mensaje enviado!</AlertTitle>
              <AlertDescription>
                Gracias por tu mensaje. Te responderé lo antes posible.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      )}

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
              <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                onSubmit={async (values, { resetForm }) => {
                  setIsSubmitting(true)
                  try {
                    setShowAlert(true)
                    setTimeout(() => setShowAlert(false), 5000)
                    const res = await fetch("https://formspree.io/f/myzjkwjy", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify(values),
                    })

                    if (res.ok) {
                      toast({
                        title: "Mensaje enviado",
                        description: "Gracias por contactarme. Te responderé lo antes posible.",
                      })
                      resetForm()
                    } else {
                      toast({
                        title: "Error al enviar",
                        description: "Hubo un problema al enviar el mensaje. Intenta más tarde.",
                        variant: "destructive",
                      })
                    }
                  } catch (error) {
                    toast({
                      title: "Error inesperado",
                      description: "Verifica tu conexión o intenta más tarde.",
                      variant: "destructive",
                    })
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Field id="name" name="name" as={Input} required placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Field id="email" name="email" type="email" as={Input} required placeholder="tu@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Field id="subject" name="subject" as={Input} required placeholder="Asunto del mensaje" />
                    </div>

                                        <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Field
                        id="message"
                        name="message"
                        as={Textarea}
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
                  </Form>
                )}
              </Formik>
            </motion.div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/MatiasJoelTorres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-10 w-10" />
            </Link>
            <Link
              href="https://linkedin.com/in/matiasjtorres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-10 w-10" />
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}