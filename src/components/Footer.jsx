import { meta } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4">
        <div className="text-lg font-bold tracking-tight accent-gradient">Saurav Singh</div>
        <div className="font-mono text-[12px] text-t3">© 2025 · NIT Delhi · Built with React + Vite</div>
        <div className="flex gap-5">
          <a href={meta.github} target="_blank" rel="noopener noreferrer" className="text-t3 text-[12.5px] hover:text-accent transition-colors">GitHub</a>
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="text-t3 text-[12.5px] hover:text-accent transition-colors">LinkedIn</a>
          <a href={`mailto:${meta.email}`} className="text-t3 text-[12.5px] hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
