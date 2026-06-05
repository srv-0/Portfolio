import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { meta } from '../data/portfolio'

const langs = [
  { name: 'Python',     pct: 35, color: '#3572A5' },
  { name: 'JavaScript', pct: 28, color: '#f1e05a' },
  { name: 'HTML',       pct: 18, color: '#e34c26' },
  { name: 'Java',       pct: 10, color: '#b07219' },
  { name: 'CSS',        pct: 5,  color: '#563d7c' },
  { name: 'Other',      pct: 4,  color: '#4a5568' },
]

const ghStats = [
  { label: 'Repositories', value: '8+',   color: '#6366f1' },
  { label: 'Contributions', value: '500+', color: '#22d3ee' },
  { label: 'Stars Earned',  value: '12+',  color: '#a78bfa' },
  { label: 'Languages',     value: '6',    color: '#34d399' },
]

function ContribGrid() {
  const cells = useMemo(() => {
    const weights = [0,0,0,1,1,1,2,2,3,4,5]
    return Array.from({ length: 52 * 7 }, () => weights[Math.floor(Math.random() * weights.length)])
  }, [])

  return (
    <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(52,1fr)' }}>
      {cells.map((lvl, i) => (
        <div key={i} className={`contrib-cell hover:scale-150 transition-transform ${lvl > 0 ? `contrib-${lvl}` : ''}`} />
      ))}
    </div>
  )
}

export default function GitHub() {
  const [ref, inView] = useInView()

  return (
    <section id="github" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Code <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-t2 text-base mb-10">
            Open source stats from{' '}
            <a href={meta.github} target="_blank" rel="noopener noreferrer"
              className="text-accent hover:text-accent-2 transition-colors">{meta.github}</a>
          </p>
        </motion.div>

        {/* stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {ghStats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-surface border border-white/[0.07] rounded-xl p-5 text-center glow-hover hover:border-accent/20">
              <div className="text-2xl font-extrabold tracking-tight" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[11px] text-t3 font-mono mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* language bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-surface border border-white/[0.07] rounded-2xl p-7 mb-4">
          <h3 className="text-[13px] font-semibold text-t2 font-mono mb-5">// language breakdown</h3>
          <div className="flex h-2 rounded-full overflow-hidden mb-4">
            {langs.map(l => (
              <div key={l.name} title={`${l.name} ${l.pct}%`}
                className="h-full transition-all duration-[1500ms]"
                style={{ width: inView ? `${l.pct}%` : '0%', background: l.color }} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {langs.map(l => (
              <div key={l.name} className="flex items-center gap-1.5 text-[12px] text-t2">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: l.color }} />
                {l.name} {l.pct}%
              </div>
            ))}
          </div>
        </motion.div>

        {/* contribution graph */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-surface border border-white/[0.07] rounded-2xl p-7">
          <h3 className="text-[13px] font-semibold text-t2 font-mono mb-5">// contribution graph — past year</h3>
          <ContribGrid />
          <div className="flex items-center justify-end gap-1.5 mt-3">
            <span className="text-[11px] text-t3 font-mono">Less</span>
            {[0,1,2,3,4,5].map(l => (
              <div key={l} className={`w-3 h-3 rounded-sm ${l===0?'bg-surface-2':''} ${l>0?`contrib-${l}`:''}`} />
            ))}
            <span className="text-[11px] text-t3 font-mono">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
