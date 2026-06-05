import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'

const filters = [
  { label: 'All',            value: 'all'       },
  { label: 'ML / AI',        value: 'ml'        },
  { label: 'Full Stack',     value: 'fullstack' },
  { label: 'Data Analytics', value: 'data'      },
  { label: 'Backend',        value: 'backend'   },
]

function ProjectCard({ p, featured, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-surface border border-white/[0.07] rounded-2xl p-7 relative overflow-hidden
        group hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_20px_60px_#00000060]
        transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>

      {/* top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />

      <div className="flex items-start justify-between mb-3">
        <div>
          {featured && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 tracking-wider mr-2">
              ⭐ FEATURED
            </span>
          )}
          <h3 className="text-lg font-bold mt-2">{p.title}</h3>
          <p className="text-[12px] font-mono text-accent mt-0.5">{p.subtitle}</p>
        </div>
        <span className="text-3xl shrink-0">{p.emoji}</span>
      </div>

      <p className="text-t2 text-[13.5px] leading-[1.7] mb-4">{p.desc}</p>

      <ul className="mb-4 space-y-1.5">
        {p.outcomes.map((o, i) => (
          <li key={i} className="flex items-start gap-2 text-[12.5px] text-t2">
            <span className="text-accent text-[10px] mt-1 shrink-0">▸</span>{o}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tech.map(t => (
          <span key={t} className="font-mono text-[11px] px-2.5 py-1 bg-bg-3 border border-white/[0.07] text-t2 rounded-full">{t}</span>
        ))}
      </div>

      <div className="flex gap-2">
        {p.github ? (
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-2 rounded-lg border border-white/10 text-t2 hover:text-t1 hover:border-t3 transition-all">
            ⌥ GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-2 rounded-lg border border-white/[0.05] text-t3 cursor-default">
            ⌥ GitHub
          </span>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold px-3.5 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-all">
            ↗ Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView(0.05)
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = projects.filter(p => {
    const tagMatch = active === 'all' || p.tags.includes(active)
    const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return tagMatch && searchMatch
  })

  return (
    <section id="projects" className="py-24 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-t2 text-base mb-10">From ML models to full-stack apps and data pipelines</p>
        </motion.div>

        {/* controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f.value} onClick={() => setActive(f.value)}
                className={`font-mono text-[11.5px] px-4 py-1.5 rounded-full border transition-all
                  ${active === f.value
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-white/[0.08] text-t2 hover:border-accent/40 hover:text-accent'}`}>
                {f.label}
              </button>
            ))}
          </div>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="bg-surface border border-white/[0.07] rounded-lg px-4 py-2 text-[13px] text-t1 outline-none w-48 focus:border-accent/50 transition-colors placeholder-t3 font-mono" />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} p={p} featured={p.featured} index={i} inView={inView} />
          ))}
          {filtered.length === 0 && (
            <div className="lg:col-span-2 text-center py-16 text-t3 font-mono">No projects match that filter.</div>
          )}
        </div>
      </div>
    </section>
  )
}
