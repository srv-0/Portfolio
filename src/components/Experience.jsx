import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'

const colorMap = {
  accent: { dot: '#6366f1', shadow: '#6366f1' },
  cyan:   { dot: '#22d3ee', shadow: '#22d3ee' },
  violet: { dot: '#a78bfa', shadow: '#a78bfa' },
  green:  { dot: '#34d399', shadow: '#34d399' },
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ Experience /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Work <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-t2 text-base mb-14">Professional roles and real-world impact</p>
        </motion.div>

        <div className="relative pl-6 border-l"
          style={{ borderImage: 'linear-gradient(to bottom,#6366f1,#22d3ee,transparent) 1' }}>
          {experience.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.accent
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative mb-12 pl-8">
                {/* dot */}
                <div className="absolute -left-[22px] top-2 w-3 h-3 rounded-full"
                  style={{ background: c.dot, boxShadow: `0 0 0 3px #05060f, 0 0 0 5px ${c.shadow}` }} />

                <div className="bg-surface border border-white/[0.07] rounded-2xl p-7 glow-hover hover:border-accent/20">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-[17px] font-bold">{exp.role}</h3>
                      <p className="text-[13px] font-mono mt-1" style={{ color: c.dot }}>{exp.company}</p>
                    </div>
                    <span className="font-mono text-[11.5px] text-t3 px-3 py-1.5 bg-bg-2 border border-white/[0.06] rounded-lg whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[13.5px] text-t2 leading-relaxed">
                        <span className="text-accent text-[8px] mt-1.5 shrink-0">◆</span>{a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.skills.map(s => (
                      <span key={s} className="font-mono text-[11px] px-2.5 py-1 bg-bg-3 border border-white/[0.07] text-t2 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
