import Link from "next/link"


export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl">
              Mi Portfolio
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Matias Torres. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
