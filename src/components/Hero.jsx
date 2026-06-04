import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTyping } from '../hooks/useTyping'
import { meta, typingPhrases, stats } from '../data/portfolio'

function Counter({ target, suffix, inView }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = Math.ceil(target / 40)
    const t = setInterval(() => {
      n = Math.min(n + step, target)
      setVal(n)
      if (n >= target) clearInterval(t)
    }, 40)
    return () => clearInterval(t)
  }, [inView, target])
  return <>{val}{suffix}</>
}

export default function Hero() {
  const typed = useTyping(typingPhrases)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true) }, { threshold: 0.2 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  const handleResume = (e) => {
    e.preventDefault()
    if (!meta.resumeUrl) { alert('Add your resume URL in src/data/portfolio.js → meta.resumeUrl'); return }
    window.open(meta.resumeUrl, '_blank')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden">
      {/* bg orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full -top-20 -left-20 animate-[orbFloat_8s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle,#6366f120,transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full top-1/4 -right-10 animate-[orbFloat_8s_ease-in-out_infinite_3s]"
          style={{ background: 'radial-gradient(circle,#22d3ee15,transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full bottom-1/4 left-1/3 animate-[orbFloat_8s_ease-in-out_infinite_6s]"
          style={{ background: 'radial-gradient(circle,#a78bfa12,transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* label */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-400 tracking-[2px] uppercase">Available for Internships & Full time roles</span>
            </div>

            {/* name */}
            <h1 className="text-[clamp(40px,6vw,68px)] font-extrabold tracking-[-2px] leading-[1.05] mb-4">
              <span className="block text-t1">Saurav</span>
              <span className="block" style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Singh
              </span>
            </h1>

            {/* typing */}
            <div className="text-[clamp(16px,2vw,22px)] text-t2 font-normal mb-3 min-h-[32px]">
              {typed}<span className="cursor-blink" />
            </div>

            {/* desc */}
            <p className="text-t2 text-base leading-[1.8] max-w-lg mb-9">
              Engineering undergraduate at{' '}
              <strong className="text-t1">NIT Delhi</strong>{' '}
              building intelligent systems at the intersection of{' '}
              <strong className="text-accent-2">Machine Learning</strong>,{' '}
              <strong className="text-cyan-400">Data Engineering</strong>, and{' '}
              <strong className="text-violet-400">Full-Stack Development</strong>.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#" onClick={handleResume} className="btn-secondary">↓ Resume</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>

            {/* stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-surface border border-white/[0.07] rounded-xl p-4 glow-hover hover:border-accent/20">
                  <div className="text-2xl font-extrabold tracking-tight gradient-text">
                    <Counter target={s.value} suffix={s.suffix} inView={statsVisible} />
                  </div>
                  <div className="text-[11px] text-t3 font-mono mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — avatar */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center">

            {/* spinning ring */}
            <div className="avatar-ring w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full p-[3px]">
              <div className="avatar-inner w-full h-full rounded-full flex items-center justify-center"
                style={{ background: '#0f1120' }}>
                <span className="text-[72px] font-extrabold"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  SRV
                </span>
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute bottom-8 -left-4 lg:-left-8 animate-[float_3s_ease-in-out_infinite] glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#34d399]" />
              Open to Opportunities
            </div>
            <div className="absolute top-12 -right-4 lg:-right-8 animate-[float_3s_ease-in-out_infinite_1.5s] glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
              NIT Delhi · 7.6 CGPA
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom,#6366f1,transparent)' }} />
        <span className="font-mono text-[10px] text-t3 tracking-[2px]">SCROLL</span>
      </div>
    </section>
  )
}
