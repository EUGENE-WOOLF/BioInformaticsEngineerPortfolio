export function Footer() {
  return (
    <footer className="border-t py-8 mt-auto bg-muted/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Professional Portfolio. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Scholar</a>
        </div>
      </div>
    </footer>
  )
}
