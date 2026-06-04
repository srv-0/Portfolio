import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'

const colorMap = {
  cyan:   { bar: 'linear-gradient(90deg,#22d3ee,#6366f1)', tag: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' },
  amber:  { bar: 'linear-gradient(90deg,#fbbf24,#f97316)', tag: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  violet: { bar: 'linear-gradient(90deg,#a78bfa,#6366f1)', tag: 'text-violet-400 border-violet-400/30 bg-violet-400/10' },
  accent: { bar: 'linear-gradient(90deg,#6366f1,#4f46e5)', tag: 'text-accent border-accent/30 bg-accent/10' },
  green:  { bar: 'linear-gradient(90deg,#34d399,#10b981)', tag: 'text-green-400 border-green-400/30 bg-green-400/10' },
  pink:   { bar: 'linear-gradient(90deg,#f472b6,#ec4899)', tag: 'text-pink-400 border-pink-400/30 bg-pink-400/10' },
}

function SkillBar({ name, pct, color, animate }) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[12.5px] text-t2 font-mono">{name}</span>
        <span className="text-[11px] text-t3 font-mono">{pct}%</span>
      </div>
      <div className="h-[3px] bg-surface-2 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-[1500ms] ease-out"
          style={{ width: animate ? `${pct}%` : '0%', background: colorMap[color].bar }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView(0.1)
  const [animate, setAnimate] = useState(false)
  useEffect(() => { if (inView) setAnimate(true) }, [inView])

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ Skills /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-t2 text-base mb-14">Tools and technologies I use to build and analyse</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-white/[0.07] rounded-2xl p-6 glow-hover hover:border-accent/20">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${colorMap[s.color].bar.split(',')[1]?.split(')')[0]}15` || '#6366f115' }}>
                  {s.icon}
                </div>
                <h3 className={`text-[13.5px] font-bold ${colorMap[s.color].tag.split(' ')[0]}`}>{s.category}</h3>
              </div>

              {s.items ? (
                s.items.map(item => (
                  <SkillBar key={item.name} name={item.name} pct={item.pct} color={s.color} animate={animate} />
                ))
              ) : (
                <div className="flex flex-wrap gap-2 mt-2">
                  {s.tags.map(t => (
                    <span key={t} className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${colorMap[s.color].tag}`}>{t}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
