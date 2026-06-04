import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { education, achievements, certifications } from '../data/portfolio'

const orgColors = {
  cyan:   'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  accent: 'text-accent border-accent/30 bg-accent/10',
  amber:  'text-amber-400 border-amber-400/30 bg-amber-400/10',
  green:  'text-green-400 border-green-400/30 bg-green-400/10',
  violet: 'text-violet-400 border-violet-400/30 bg-violet-400/10',
  pink:   'text-pink-400 border-pink-400/30 bg-pink-400/10',
}

export function Education() {
  const [ref, inView] = useInView()
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ Education /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
          <p className="text-t2 text-base mb-14">Building the engineering & analytical bedrock</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {education.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-white/[0.07] rounded-2xl p-7 relative overflow-hidden glow-hover hover:border-accent/20">
              <div className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg,#6366f1,transparent)' }} />
              <div className={`flex ${e.main ? 'flex-col sm:flex-row' : 'flex-row'} gap-5 items-start`}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 bg-accent/10 border border-accent/20">
                  {e.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${e.main ? 'text-lg' : 'text-[15px]'}`}>{e.degree}</h3>
                  <p className="text-[13px] font-mono text-accent mb-1">{e.institution}</p>
                  <p className="text-[12px] text-t3 font-mono mb-3">{e.period} · {e.score}</p>
                  {e.courses && (
                    <div className="flex flex-wrap gap-1.5">
                      {e.courses.map(c => (
                        <span key={c} className="font-mono text-[11px] px-2.5 py-1 bg-bg-3 border border-white/[0.07] text-t2 rounded-full">{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Achievements() {
  const [ref, inView] = useInView()
  return (
    <section id="achievements" className="py-24 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ Achievements /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-t2 text-base mb-14">Milestones earned through competition and excellence</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-surface border border-white/[0.07] rounded-2xl p-6 text-center glow-hover hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl mb-4 block">{a.icon}</span>
              <h3 className="text-[14px] font-bold mb-2">{a.title}</h3>
              <p className="text-t2 text-[12.5px] leading-relaxed mb-3">{a.desc}</p>
              <span className="font-mono text-[11px] text-t3 px-3 py-1 bg-bg-2 border border-white/[0.06] rounded-full">{a.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  const [ref, inView] = useInView()
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ Certifications /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight mb-3">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-t2 text-base mb-14">Continuous learning through recognised programs</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-surface border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-3 glow-hover hover:border-accent/20">
              <span className={`font-mono text-[10.5px] px-2.5 py-1 rounded-full border self-start tracking-wider uppercase ${orgColors[c.orgColor]}`}>
                {c.org}
              </span>
              <h3 className="text-[14px] font-bold leading-snug">{c.name}</h3>
              <p className="text-[11.5px] text-t3 font-mono">{c.date}</p>
              <p className="text-t2 text-[12.5px] leading-relaxed flex-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
