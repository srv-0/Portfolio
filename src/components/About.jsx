import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { about } from '../data/portfolio'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="section-tag mb-4">⟨ About Me /⟩</div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-tight mb-3">
            Engineering Meets <span className="gradient-text">Data Intelligence</span>
          </h2>
          <p className="text-t2 text-base mb-14">Where analytical rigor meets computational thinking</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* text */}
          <motion.div initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-t2 text-[15px] leading-[1.9] mb-4"
                dangerouslySetInnerHTML={{ __html: p
                  .replace(/<strong>/g, '<strong class="text-t1 font-semibold">')
                }} />
            ))}
            <div className="flex flex-col gap-3 mt-6">
              {about.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-surface border border-white/[0.07] rounded-xl hover:border-accent/20 transition-colors">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-accent/10 shrink-0">{h.icon}</div>
                  <div>
                    <div className="text-[13px] font-semibold text-t1">{h.title}</div>
                    <div className="text-[11px] text-t3 font-mono">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* cards */}
          <motion.div initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4">
            {about.cards.map((c, i) => (
              <div key={i} className="bg-surface border border-white/[0.07] rounded-2xl p-6 glow-hover hover:border-accent/20">
                <h4 className="text-[13.5px] font-bold text-accent-2 mb-2">{c.icon} {c.title}</h4>
                <p className="text-t2 text-[13px] leading-[1.7]">{c.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
