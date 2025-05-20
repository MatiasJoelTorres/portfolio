"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Plataforma de comercio electrónico para artesanos locales con sistema de pagos integrado, gestión de inventario y panel de administración personalizado.",
    image: "/images/ecommerce-project.png",
    tags: ["Nest.js", "TypeScript", "Swagger", "PostgreSQL", "React"],
    repoUrl: "https://github.com/pi-rym/PM4BE-MatiasJoelTorres",
  },
  {
    id: 2,
    title: "GeStocker",
    description:
      "Gestor de stock, con control en tiempo real de inventario, gestión de proveedores y clientes, y generación de informes de ventas. Hecho junto con un equipo de trabajo como proyecto final en Henry.",
    image: "/images/dashboard-project.png",
    tags: ["React", "D3.js", "Firebase", "Redux", "Material UI"],
    demoUrl: "https://ge-stocker.vercel.app/",
    repoUrl: "https://github.com/tu-usuario/finance-dashboard",
  },
  {
    id: 3,
    title: "SPA Drivers",
    description:
      "Single page application que gestiona información sobre conductores de formula 1, cuenta con flitrados, ordenamiento y formularios de creacion",
    tags: ["Redux", "Node.js", "React", "PostgreSQL", "Express"],
    repoUrl: "https://github.com/MatiasJoelTorres/PI-drivers",
  },
  {
    id: 4,
    title: "MusicApp",
    description:
      "Sistema de gestión de aprendizaje musical (LMS) con cursos interactivos, evaluaciones automatizadas y seguimiento del progreso de los estudiantes.",
    image: "/images/education-platform.png",
    tags: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
    demoUrl: "",
    repoUrl: "",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portafolio de Proyectos</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Una selección de mis trabajos más recientes y destacados en desarrollo web y aplicaciones
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    {project.demoUrl ? (
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">Demo no disponible</span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}
